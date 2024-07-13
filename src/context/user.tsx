import { AuthUser } from '@/types'
import React, { createContext, FC, PropsWithChildren, useCallback, useState } from 'react'
import * as helper from '@/lib/helper'

interface UserContextSchema {
  user: AuthUser | null
  isLoading: boolean
  signUp: (values: Omit<AuthUser, 'id'>) => Promise<void>
  login: (values: Omit<AuthUser, 'id' | 'name'>) => Promise<void>
}

export const UserContext = createContext<UserContextSchema>({
  user: null,
  isLoading: false,
  login: async () => {},
  signUp: async () => {}
})

const UserContextProvider: FC<PropsWithChildren> = ({
  children
}) => {

  const [user, setUser] = useState<AuthUser>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signUp = useCallback(async (values:  Omit<AuthUser, 'id'> & { confirmPassword: string }) => {
    if(values.confirmPassword !== values.password) {
      return
    }

    const _user = { ...values, confirmPassword: undefined }

    setIsLoading(true)
    helper
      .createUser(_user)
      .then(res => setUser(res))
      .catch(err => console.log(err, 'error'))
      .finally(() => setIsLoading(false))

  }, [])

  const login = useCallback(async (values: Omit<AuthUser, 'id' | 'name'>) => {
    setIsLoading(true)
    helper
      .findUser('email', values.email)
      .then(user => {
        setUser(user)
      })
      .catch(err => {
        console.log(err, 'error')
      })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
        signUp,
        login
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider