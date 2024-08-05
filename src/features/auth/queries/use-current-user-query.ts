import { useQuery } from '@tanstack/vue-query'
import { getUser } from '../api'

const QUERY_KEY = 'currentUser'

export function getQueryKey() {
  return QUERY_KEY
}

export function useCurrentUserQuery() {
  return useQuery({
    queryKey: [QUERY_KEY],
    queryFn: getUser
  })
}
