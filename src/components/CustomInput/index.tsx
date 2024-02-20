import { ComponentProps, forwardRef } from 'react'

// Styles
import * as C from './styles'

interface CustomInputProps extends ComponentProps<'input'> {
  hasError?: boolean
}

type Ref = HTMLInputElement

const CustomInput = forwardRef<Ref, CustomInputProps>(
  ({ hasError, ...rest }, ref) => (
    <C.Input ref={ref} $error={hasError} {...rest} />
  ),
)

CustomInput.displayName = 'CustomInput'

export default CustomInput
