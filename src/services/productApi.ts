import { baseQueryWithReAuth } from 'services/base'
import { createApi } from '@reduxjs/toolkit/query/react'

export interface Product {
  id: string
  name: string
  image_url: string
  image_id?: string
  [x: string]: any
}

export interface OrganizationProductType extends Product {
  [x: string]: any
  price?: string
  mrp?: string
  rating?: number
}

export interface ProductListResponse<T> {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: T[]
}

export const authBaseApi = createApi({
  reducerPath: 'productApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Products'],
  endpoints: () => ({})
})

export const productApi = authBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    product: builder.query<ProductListResponse<Product>, number | void>({
      query: (page = 1) => {
        return {
          url: '/product',
          method: 'GET',
          params: {
            page: page
          }
        }
      },
      providesTags: (result) =>
        result && result.data
          ? [
              ...result.data.map(({ id }) => ({ type: 'Products' as const, id })),
              { type: 'Products', id: 'PARTIAL-LIST' }
            ]
          : [{ type: 'Products', id: 'PARTIAL-LIST' }]
    }),
    createProduct: builder.mutation({
      query: (params) => {
        return {
          url: '/product',
          method: 'POST',
          body: {
            ...params
          }
        }
      }
    })
  })
})

export const { useProductQuery, useCreateProductMutation } = productApi
