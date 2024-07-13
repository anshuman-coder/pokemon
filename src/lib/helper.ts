import { AuthUser } from '@/types'
import AsyncStorage from '@react-native-async-storage/async-storage'


const genUid = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let uuid = ''
  for (let i = 0; i < 10; i++) {
      uuid += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return uuid
}

const USERS_KEY = 'users'

const readUsers = async (): Promise<Record<string, AuthUser>> => {
  try {
      const data = await AsyncStorage.getItem(USERS_KEY)
      return data ? JSON.parse(data) : {}
  } catch (error) {
      console.error('Error reading user data:', error)
      return {}
  }
}

const writeUsers = async (users: Record<string, AuthUser>) => {
  try {
      await AsyncStorage.setItem(USERS_KEY, JSON.stringify(users))
  } catch (error) {
      console.error('Error writing user data:', error)
  }
}

export const createUser = async (values: Omit<AuthUser, 'id'>) => {
  const id = genUid()
  const _user = { ...values, id }

  const checkUser = await findUser('email', _user.email)
  if(checkUser) return Promise.reject(null)

  let userList = await readUsers() ?? {}
  userList = {
    ...userList,
    [id]: _user,
  }

  await writeUsers(userList)
  return Promise.resolve(_user)
}

export const findUser = async (key: keyof AuthUser, value: string, ) => {
  const users = await readUsers()
  const user = Object.values(users).find((user) => user[key] === value)
  return Promise.resolve(user)
}