import { baseQueryWithReAuth } from 'services/base'
import { createApi } from '@reduxjs/toolkit/query/react'
import { Product, QueryListType } from 'type'

export const authBaseApi = createApi({
  reducerPath: 'productApi',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Products'],
  endpoints: () => ({})
})

export const productApi = authBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    product: builder.query<Product[], QueryListType>({
      query: ({ page = 1, per_page = 21 }) => {
        return {
          url: '/product',
          method: 'GET',
          params: {
            page,
            per_page
          }
        }
      },
      providesTags: (result) =>
        result && result
          ? [
              ...result.map(({ id }) => ({ type: 'Products' as const, id })),
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
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => {
        return {
          url: '/product/' + id,
          method: 'GET'
        }
      },
      providesTags: (result, error, id) => [{ type: 'Products', id }]
    })
  })
})

export const { useProductQuery, useCreateProductMutation, useGetProductByIdQuery } = productApi
