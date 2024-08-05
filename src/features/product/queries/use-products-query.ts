import type { Ref } from 'vue'
import { useQuery, keepPreviousData } from '@tanstack/vue-query'
import { getProducts } from '../api'

const QUERY_KEY = 'products'

export function getQueryKey() {
  return QUERY_KEY
}

// ref: https://stackoverflow.com/questions/68105012/what-is-the-correct-way-to-pass-parameters-to-a-react-query-usequery-method-that
export function useProductsQuery(limit: Ref<number>, skip: Ref<number>, q?: Ref<string>) {
  return useQuery({
    queryKey: [QUERY_KEY, q, limit, skip],
    queryFn: () => {
      if (q) {
        return getProducts({ limit: limit.value, skip: skip.value, q: q.value })
      }
      return getProducts({ limit: limit.value, skip: skip.value })
    },
    placeholderData: keepPreviousData
  })
}
