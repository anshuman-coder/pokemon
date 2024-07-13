import { UserContext } from '@/context/user'
import React, { useContext } from 'react'

const useAuth = () => useContext(UserContext)

export default useAuth