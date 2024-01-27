import { NODE_ENV, SESSION_PASS } from '@/config'
import { SessionOptions } from 'iron-session'

export interface SessionData {
  username: string
  isLoggedIn: boolean
}

export const defaultSession: SessionData = {
  username: '',
  isLoggedIn: false,
}

export const sessionOptions: SessionOptions = {
  password: SESSION_PASS,
  cookieName: 'session',
  cookieOptions: {
    secure: NODE_ENV === 'production',
  },
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
