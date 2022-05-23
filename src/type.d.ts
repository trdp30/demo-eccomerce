/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Product {
  id: number
  title: string
  price: number
  mrp: number
  review_count?: number
  available?: boolean
  images: Array<string>
  description?: string
  review_ratings: number
  product_type?: string
  [x: string]: any
}

export interface ProductListResponse<T> {
  page: number
  per_page: number
  total: number
  total_pages: number
  data: T[]
}

export interface QueryListType {
  page?: number
  per_page?: number
  [x: string]: any
}
