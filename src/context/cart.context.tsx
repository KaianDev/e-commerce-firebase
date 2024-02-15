import { createContext, useContext, useState } from 'react'
import CartProduct from '../types/CartProduct'
import Product from '../types/Product'

interface ICartContext {
  isVisible: boolean
  toggleCartVisible: () => void
  products: CartProduct[]
  addProductToCart: (product: Product) => void
}

const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCartVisible: () => {},
  addProductToCart: () => {},
})

interface CartContextProviderProps {
  children: React.ReactNode
}
const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>([])

  const toggleCartVisible = () => setIsVisible((prev) => !prev)

  const addProductToCart = (product: Product) => {
    const hasProduct = products.find((item) => item.id === product.id)
    if (hasProduct) {
      setProducts((prev) => {
        return prev.map((prevItem) => {
          return prevItem.id === product.id
            ? { ...prevItem, quantity: prevItem.quantity + 1 }
            : prevItem
        })
      })
    } else {
      setProducts((prev) => [...prev, { ...product, quantity: 1 }])
    }
  }

  return (
    <CartContext.Provider
      value={{ isVisible, products, toggleCartVisible, addProductToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)

export default CartContextProvider
