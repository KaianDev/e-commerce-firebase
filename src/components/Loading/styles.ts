import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const LoadingContainer = styled.div`
  position: fixed;
  inset: 0 0 0 0;
  background-color: #00000033;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;

  p {
    font-size: 1.5rem;
    color: ${Colors.text.dark};
    text-align: center;
    max-width: 650px;
  }
`
