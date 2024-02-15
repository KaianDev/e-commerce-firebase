import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  align-items: center;
`

export const CartItemImage = styled.img`
  width: 143px;
  height: 181px;
  border-radius: 0.625rem;
  overflow: hidden;
  box-shadow: 0px 3px 5px #000000aa;
  object-fit: cover;
`

export const CartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  flex: 1;
`

export const CartItemTitle = styled.strong`
  font-size: 1rem;
  font-weight: 600;
`

export const CartItemPrice = styled.p`
  font-size: 1rem;
  font-weight: 500;
`

export const CartQuantityButtonContainer = styled.div`
  display: flex;
  gap: 0.625rem;
  font-size: 0.875rem;
`

export const CartButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`
