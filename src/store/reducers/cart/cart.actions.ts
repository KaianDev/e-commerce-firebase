import Product from '../../../types/Product'
import cartActionTypes from './cart.action-types'

interface AddProductToCartAction {
  type: typeof cartActionTypes.ADD_PRODUCT_TO_CART
  payload: Product
}

export const addProductToCart = (payload: Product): AddProductToCartAction => ({
  type: cartActionTypes.ADD_PRODUCT_TO_CART,
  payload,
})

interface IncreaseProductQuantityToCartAction {
  type: typeof cartActionTypes.INCREASE_PRODUCT_QUANTITY_TO_CART
  payload: string
}
export const increaseProductQuantityToCart = (
  payload: string,
): IncreaseProductQuantityToCartAction => ({
  type: cartActionTypes.INCREASE_PRODUCT_QUANTITY_TO_CART,
  payload,
})

interface DecreaseProductQuantityToCartAction {
  type: typeof cartActionTypes.DECREASE_PRODUCT_QUANTITY_TO_CART
  payload: string
}

export const decreaseProductQuantityToCart = (
  payload: string,
): DecreaseProductQuantityToCartAction => ({
  type: cartActionTypes.DECREASE_PRODUCT_QUANTITY_TO_CART,
  payload,
})

interface RemoveProductToCartAction {
  type: typeof cartActionTypes.REMOVE_PRODUCT_TO_CART
  payload: string
}

export const removeProductToCart = (
  payload: string,
): RemoveProductToCartAction => ({
  type: cartActionTypes.REMOVE_PRODUCT_TO_CART,
  payload,
})

interface ToggleVisibilityAction {
  type: typeof cartActionTypes.TOGGLE_VISIBILITY
}

export const toggleVisibility = (): ToggleVisibilityAction => ({
  type: cartActionTypes.TOGGLE_VISIBILITY,
})

interface ClearCartAction {
  type: typeof cartActionTypes.CLEAR_CART
}

export const clearCart = (): ClearCartAction => ({
  type: cartActionTypes.CLEAR_CART,
})

type CartActions =
  | AddProductToCartAction
  | IncreaseProductQuantityToCartAction
  | DecreaseProductQuantityToCartAction
  | RemoveProductToCartAction
  | ClearCartAction
  | ToggleVisibilityAction

export default CartActions
