import styled from 'styled-components'

export const PaymentConfirmationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100dvh - 76px);

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
  }
`

export const PaymentConfirmationContent = styled.div`
  display: flex;
  height: 100%;
  width: 500px;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`
