import { parseCookies } from 'nookies'
import { atom } from 'recoil'

type AuthState = {
  accessToken: string | undefined
  userId: string | undefined
  isLoggedIn: boolean
  name?: string | undefined
  closets?: string | undefined
}

const { '@closetfy/token': token } = parseCookies()
const { '@closetfy/user': user } = parseCookies()
export const authState = atom({
  key: 'authState',
  default: {
    accessToken: token,
    userId: user ? JSON.parse(user)?.id : undefined,
    isLoggedIn: !!token,
    name: user ? JSON.parse(user)?.name : undefined,
    closets: user ? JSON.parse(user)?.closets : undefined,
  } as AuthState,
})
