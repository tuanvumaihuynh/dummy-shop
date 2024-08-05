import axios from '@/api-client'
import type { User, LoginResponse, RefreshResponse } from './types'

const EXPIRES_IN_MINS = 10

export async function login(body: { username: string; password: string }) {
  const { data } = await axios.post<LoginResponse>('/auth/login', {
    ...body,
    expiresInMins: EXPIRES_IN_MINS
  })
  return data
}

export async function refresh(body: { refreshToken: string }) {
  const { data } = await axios.post<RefreshResponse>('/auth/refresh', {
    ...body,
    expiresInMins: EXPIRES_IN_MINS
  })
  return data
}

export async function getUser() {
  const { data } = await axios.get<User>('/auth/me')
  return data
}
