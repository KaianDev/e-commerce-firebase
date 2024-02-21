import { RootState } from '../../rootReducer'

export const selectProductsTotalPrice = (state: RootState) => {
  return state.cartReducer.products.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)
}

export const selectProductsTotalQuantity = (state: RootState) => {
  return state.cartReducer.products.reduce((acc, product) => {
    return acc + product.quantity
  }, 0)
}
