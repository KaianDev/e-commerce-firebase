import { createContext, useContext, useState } from 'react'
import CartProduct from '../types/CartProduct'

interface ICartContext {
  isVisible: boolean
  toggleCartVisible: () => void
  products: CartProduct[]
}

const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCartVisible: () => {},
})

interface CartContextProviderProps {
  children: React.ReactNode
}
const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products] = useState<CartProduct[]>([])

  const toggleCartVisible = () => setIsVisible((prev) => !prev)

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCartVisible }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)

export default CartContextProvider
