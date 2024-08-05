import { useQuery } from '@tanstack/vue-query'
import { getProduct } from '../api'

const QUERY_KEY = 'products'

export function getQueryKey(id: string) {
  return [QUERY_KEY, id]
}

export function useProductDetailQuery(id: string) {
  return useQuery({
    queryKey: getQueryKey(id),
    queryFn: () => getProduct(id)
  })
}
