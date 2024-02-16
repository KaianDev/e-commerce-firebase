import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import CartProduct from '../types/CartProduct'
import Product from '../types/Product'

interface ICartContext {
  isVisible: boolean
  products: CartProduct[]
  productTotalPrice: number
  productTotalQuantity: number
  toggleCartVisible: () => void
  addProductToCart: (product: Product) => void
  increaseProductQuantity: (id: string) => void
  decreaseProductQuantity: (id: string) => void
  removeProductToCart: (id: string) => void
}

const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  productTotalPrice: 0,
  productTotalQuantity: 0,
  toggleCartVisible: () => {},
  addProductToCart: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {},
  removeProductToCart: () => {},
})

interface CartContextProviderProps {
  children: React.ReactNode
}
const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products, setProducts] = useState<CartProduct[]>(
    JSON.parse(localStorage.getItem('cartProducts') || '[]'),
  )

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(products))
  }, [products])

  const productTotalPrice = useMemo(() => {
    return products.reduce(
      (acc, product) => (acc = acc + product.quantity * product.price),
      0,
    )
  }, [products])

  const productTotalQuantity = useMemo(() => {
    return products.reduce((acc, product) => (acc = acc + product.quantity), 0)
  }, [products])

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

  const increaseProductQuantity = (id: string) => {
    setProducts((prev) => {
      return prev.map((prevItem) => {
        return prevItem.id === id
          ? { ...prevItem, quantity: prevItem.quantity + 1 }
          : prevItem
      })
    })
  }

  const decreaseProductQuantity = (id: string) => {
    setProducts((prev) => {
      return prev
        .map((prevItem) => {
          return prevItem.id === id
            ? { ...prevItem, quantity: prevItem.quantity - 1 }
            : prevItem
        })
        .filter((prevItem) => prevItem.quantity > 0)
    })
  }

  const removeProductToCart = (id: string) => {
    setProducts((prev) => prev.filter((prevItem) => prevItem.id !== id))
  }

  return (
    <CartContext.Provider
      value={{
        isVisible,
        products,
        productTotalPrice,
        productTotalQuantity,
        toggleCartVisible,
        addProductToCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        removeProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => useContext(CartContext)

export default CartContextProvider
