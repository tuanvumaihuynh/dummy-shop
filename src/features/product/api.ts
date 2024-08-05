import axios from '@/api-client'
import type { ProductPagingResponse, Product } from './types'

export async function getProducts(params: { q?: string; limit: number; skip: number }) {
  if (params.q !== undefined) {
    return await searchProducts({
      q: params.q,
      limit: params.limit,
      skip: params.skip
    })
  }

  const { data } = await axios.get<ProductPagingResponse>('/products', { params })
  return data
}

async function searchProducts(params: { q: string; limit: number; skip: number }) {
  const { data } = await axios.get<ProductPagingResponse>('/products/search', { params })
  return data
}

export async function getProduct(id: string) {
  const { data } = await axios.get<Product>(`/products/${id}`)
  return data
}
