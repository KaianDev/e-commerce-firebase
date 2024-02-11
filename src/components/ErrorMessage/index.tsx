import { ComponentProps } from 'react'

// Styles
import * as C from './styles'

const ErrorMessage = ({ children, ...rest }: ComponentProps<'p'>) => {
  return <C.ErrorMessage {...rest}>{children}</C.ErrorMessage>
}

export default ErrorMessage
