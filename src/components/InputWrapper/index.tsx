interface InputWrapperProps {
  label: string
  children: React.ReactNode
  id: string
}

import * as C from './styles'

const InputWrapper = ({ children, label, id }: InputWrapperProps) => {
  return (
    <C.InputWrapperContainer>
      <label htmlFor={id}>{label}</label>
      {children}
    </C.InputWrapperContainer>
  )
}

export default InputWrapper
