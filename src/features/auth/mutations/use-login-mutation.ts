import { useMutation } from '@tanstack/vue-query'
import { login } from '../api'
import type { LoginResponse } from '../types'

interface LoginInput {
  username: string
  password: string
}

export function useLoginMutation() {
  return useMutation<LoginResponse, Error, LoginInput>({
    mutationFn: (input) => login(input)
  })
}
