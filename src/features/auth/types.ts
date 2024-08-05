export interface LoginResponse {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  token: string
  refreshToken: string
}

export interface Bank {
  iban: string
  currency: string
  cardType: string
  cardNumber: string
  cardExpire: string
}

export interface User {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  gender: string
  image: string
  ip: string
  macAddress: string
  phone: string
  role: string
  bank: Bank
}

export interface RefreshResponse {
  token: string
  refreshToken: string
}
