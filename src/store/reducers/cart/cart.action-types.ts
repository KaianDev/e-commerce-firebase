const cartActionTypes = {
  ADD_PRODUCT_TO_CART: 'cart/addProduct' as const,
  INCREASE_PRODUCT_QUANTITY_TO_CART: 'cart/increaseProductQuantity' as const,
  DECREASE_PRODUCT_QUANTITY_TO_CART: 'cart/decreaseProductQuantity' as const,
  REMOVE_PRODUCT_TO_CART: 'cart/removeProduct' as const,
  CLEAR_CART: 'cart/clearCart' as const,
  TOGGLE_VISIBILITY: 'cart/toggleVisibility' as const,
}

export default cartActionTypes
