import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

interface InputProps {
  error?: boolean
}

export const Input = styled.input<InputProps>`
  width: 100%;
  padding: 0.625rem 1rem;
  background-color: ${Colors.input.bg};
  border: 1px solid ${(props) => (props.error ? Colors.error : 'transparent')};
  border-radius: 0.625rem;
  font-size: 1.125rem;
  box-shadow: 0px 5px 2px 0px #00000045;
  outline: none;

  &::placeholder {
    color: ${(props) => (props.error ? Colors.error : Colors.placeholder)};
  }
`
