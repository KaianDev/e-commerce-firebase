/* eslint-disable no-case-declarations */
import CartProduct from '../../../types/CartProduct'
import cartActionTypes from './cart.action-types'
import CartActions from './cart.actions'

interface InitialState {
  products: CartProduct[]
  isVisible: boolean
}

const initialState: InitialState = {
  products: [],
  isVisible: false,
}

const cartReducer = (
  state = initialState,
  action: CartActions,
): InitialState => {
  switch (action.type) {
    case cartActionTypes.ADD_PRODUCT_TO_CART:
      const hasProduct = state.products.find(
        (product) => product.id === action.payload.id,
      )
      if (hasProduct) {
        return {
          ...state,
          products: [
            ...state.products.map((product) =>
              product.id === action.payload.id
                ? { ...product, quantity: product.quantity + 1 }
                : product,
            ),
          ],
        }
      } else {
        return {
          ...state,
          products: [...state.products, { ...action.payload, quantity: 1 }],
        }
      }

    case cartActionTypes.INCREASE_PRODUCT_QUANTITY_TO_CART:
      return {
        ...state,
        products: [
          ...state.products.map((product) =>
            product.id === action.payload
              ? { ...product, quantity: product.quantity + 1 }
              : product,
          ),
        ],
      }

    case cartActionTypes.DECREASE_PRODUCT_QUANTITY_TO_CART:
      return {
        ...state,
        products: [
          ...state.products
            .map((product) =>
              product.id === action.payload
                ? { ...product, quantity: product.quantity - 1 }
                : product,
            )
            .filter((product) => product.quantity > 0),
        ],
      }

    case cartActionTypes.REMOVE_PRODUCT_TO_CART:
      return {
        ...state,
        products: [
          ...state.products.filter((product) => product.id !== action.payload),
        ],
      }

    case cartActionTypes.CLEAR_CART:
      return { ...state, products: [] }

    case cartActionTypes.TOGGLE_VISIBILITY:
      return { ...state, isVisible: !state.isVisible }

    default:
      return state
  }
}

export default cartReducer
