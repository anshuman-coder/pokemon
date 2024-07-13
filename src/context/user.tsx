import { AuthUser } from '@/types'
import React, { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from 'react'

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

  const signUp = useCallback(async (values:  Omit<AuthUser, 'id'>) => {
    console.log(values)
  }, [])
  const login = useCallback(async (values: Omit<AuthUser, 'id' | 'name'>) => {
    console.log(values)
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

export const useAuth = useContext(UserContext)

export default UserContextProvider