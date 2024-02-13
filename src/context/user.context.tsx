import { createContext, useContext, useState } from 'react'
import User from '../types/User'

interface IUserContext {
  currentUser: User | null
  isAuthenticated: boolean
  loginUser: (user: User) => void
  logoutUser: () => void
}

const UserContext = createContext<IUserContext>({
  currentUser: null,
  isAuthenticated: false,
  loginUser: () => undefined,
  logoutUser: () => undefined,
})

interface UserProviderProps {
  children: React.ReactNode
}

const UserContextProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const isAuthenticated = currentUser !== null

  const loginUser = (user: User) => setCurrentUser(user)
  const logoutUser = () => setCurrentUser(null)

  return (
    <UserContext.Provider
      value={{ currentUser, isAuthenticated, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)

export default UserContextProvider
