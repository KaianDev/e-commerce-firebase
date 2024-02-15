import CartContextProvider from '../context/cart.context'
import CategoryContextProvider from '../context/category.context'
import UserContextProvider from '../context/user.context'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <UserContextProvider>
      <CategoryContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </CategoryContextProvider>
    </UserContextProvider>
  )
}

export default Providers
