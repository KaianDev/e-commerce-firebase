import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: ${Colors.text.light};
  background-color: ${Colors.primary};
  padding: 1rem 0.625rem;
  border-radius: 0.625rem;
  width: 100%;
  max-width: 650px;

  &:hover {
    background-color: #000;
  }
`
