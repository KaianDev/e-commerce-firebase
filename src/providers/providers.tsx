import CategoryContextProvider from '../context/category.context'
import UserContextProvider from '../context/user.context'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <UserContextProvider>
      <CategoryContextProvider>{children}</CategoryContextProvider>
    </UserContextProvider>
  )
}

export default Providers
