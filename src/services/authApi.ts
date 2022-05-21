import { baseQueryWithReAuth } from 'services/base'
import { createApi } from '@reduxjs/toolkit/query/react'
import { LoginParams } from 'globals'

export const authBaseApi = createApi({
  reducerPath: 'authenticationApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Auth'],
  endpoints: () => ({})
})

export const authenticationApi = authBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<object, LoginParams>({
      query: (params: LoginParams) => {
        return {
          url: 'user/login',
          method: 'POST',
          body: {
            ...params
          }
        }
      }
    })
  })
})

export const { useLoginMutation } = authenticationApi
