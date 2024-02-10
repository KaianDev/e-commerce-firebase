import { ComponentProps } from 'react'

import * as C from './styles'

const CustomButton = ({ children, ...rest }: ComponentProps<'button'>) => {
  return <C.ButtonContainer {...rest}>{children}</C.ButtonContainer>
}

export default CustomButton
