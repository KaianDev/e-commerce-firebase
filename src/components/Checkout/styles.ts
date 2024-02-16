import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem 0;
  color: ${Colors.primary};
  max-height: calc(100dvh - 76px);

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: #ccc;
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${Colors.primary};
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${Colors.text.dark};
    border-radius: 5px;
  }
`

export const CheckoutTitle = styled.h2`
  font-size: 1.3125rem;
  text-align: center;
  font-weight: 700;
`

export const CheckoutProducts = styled.div`
  min-width: 650px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;
  margin-top: 1rem;
  padding-bottom: 1rem;
`

export const CheckoutButtonContainer = styled.div`
  width: 650px;
`

export const CheckoutProductsTotalPrice = styled.p`
  width: 650px;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.5625rem;
`
