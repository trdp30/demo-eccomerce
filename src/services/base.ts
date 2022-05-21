import { BaseQueryApi, QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import {
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/dist/query/fetchBaseQuery'
import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers'
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export declare type BaseQueryFn<
  Args = FetchArgs,
  Result = unknown,
  Error = FetchBaseQueryError,
  DefinitionExtraOptions = {
    [x: string]: unknown
    baseQuery?: BaseQueryFn
  },
  Meta = Record<string, unknown>
> = (
  args: Args,
  api: BaseQueryApi,
  extraOptions: DefinitionExtraOptions
) => MaybePromise<QueryReturnValue<Result, Error, Meta>>

export interface ExtraOptions {
  [x: string]: unknown
  baseQuery?: BaseQueryFn
}

export type SessionPayload = {
  access_token: string
  expires_in: number
  grant_type: string
  refresh_token: string
}

export interface StoredSessionPayload extends SessionPayload {
  expires_at: number
}

export const getTimeInMilliseconds = (expiryTime: number) => {
  const timestamp = +new Date()
  if (expiryTime) {
    return timestamp + expiryTime
  }
  return timestamp
}

export const storeSessionInLocalStorage = (data: SessionPayload): boolean => {
  const expires_at = getTimeInMilliseconds(Number(data?.expires_in) * 1000)
  const sessionData: StoredSessionPayload = {
    ...data,
    expires_at
  }
  localStorage.setItem('top_session', JSON.stringify(sessionData))
  return true
}

export function prepareHeaders(headers: Headers) {
  const session = localStorage.getItem('top_session')

  if (session) {
    const jsonData = JSON.parse(session)
    headers.set('authorization', 'Bearer ' + jsonData.access_token)
  }
  return headers
}

export const rootAPiBaseQuery = fetchBaseQuery({
  baseUrl: `${process.env.REACT_APP_ROOT_API_URL}/v1`,
  prepareHeaders
})

export declare type ValidateSessionExpiryFn = (
  args: FetchArgs,
  api: BaseQueryApi,
  extraOptions: ExtraOptions
) => Promise<undefined | QueryReturnValue>

export const validateSessionExpiry: ValidateSessionExpiryFn = async (_args, api, extraOptions) => {
  const session = localStorage.getItem('top_session')
  let refreshResult: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta> | undefined
  if (session) {
    const jsonData = JSON.parse(session)
    const currentTimestamp = getTimeInMilliseconds(
      Number(process.env.REFRESH_TOKEN_BUFFER_TIME) * 1000
    )
    const isExpired = new Date(jsonData.expires_at) < new Date(currentTimestamp)
    if (isExpired) {
      const refreshArgs = {
        url: '/user/token',
        method: 'POST',
        body: { refresh_token: jsonData.refresh_token }
      }
      refreshResult = await rootAPiBaseQuery(refreshArgs, api, extraOptions)
      if (refreshResult.error && Object.keys(refreshResult.error).length) {
        localStorage.removeItem('top_session')
        window.location.replace('/auth/login')
        return refreshResult
      }
      storeSessionInLocalStorage(refreshResult.data as SessionPayload)
    }
    return refreshResult
  }
}

export const baseQueryWithReAuth: BaseQueryFn = async (args, api, extraOptions) => {
  await validateSessionExpiry(args, api, extraOptions)
  let response

  if (extraOptions && extraOptions.baseQuery) {
    response = await extraOptions.baseQuery(args, api, extraOptions)
  } else {
    response = await rootAPiBaseQuery(args, api, extraOptions)
  }

  if (response && response.error && response.error.status === 401) {
    localStorage.removeItem('top_session')
    window.location.replace('/auth/login')
  }
  return response
}
