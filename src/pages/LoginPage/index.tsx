import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { isEmail } from 'validator'

// Components
import CustomButton from '../../components/CustomButton'
import Header from '../../components/Header'
import CustomInput from '../../components/CustomInput'
import InputWrapper from '../../components/InputWrapper'
import ErrorMessage from '../../components/ErrorMessage'

// Styles
import * as C from './styles'

interface LoginForm {
  email: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginForm>()

  const handleSubmitLoginClick = (data: LoginForm) => {
    console.log(data)
  }

  return (
    <>
      <Header />
      <C.LoginContainer>
        <C.LoginContent>
          <C.LoginTitle>Entre com sua conta</C.LoginTitle>

          <CustomButton>
            <BsGoogle size={20} />
            Entrar com o Google
          </CustomButton>

          <C.LoginSubtitle>ou entre com seu e-mail</C.LoginSubtitle>

          <hr />

          <InputWrapper id="email" label="E-mail">
            <CustomInput
              {...register('email', {
                required: true,
                validate: (value) => isEmail(value),
              })}
              placeholder="Digite seu e-mail"
              id="email"
              hasError={!!errors?.email}
            />
            {errors.email?.type === 'required' && (
              <ErrorMessage>Campo Obrigatório</ErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <ErrorMessage>Informe um e-mail válido</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper id="password" label="Senha">
            <CustomInput
              {...register('password', {
                required: true,
              })}
              type="password"
              placeholder="Digite seu senha"
              id="password"
              hasError={!!errors?.email}
            />
            {errors.password?.type === 'required' && (
              <ErrorMessage>Campo Obrigatório</ErrorMessage>
            )}
          </InputWrapper>

          <CustomButton onClick={handleSubmit(handleSubmitLoginClick)}>
            <FiLogIn size={20} />
            Entrar
          </CustomButton>
        </C.LoginContent>
      </C.LoginContainer>
    </>
  )
}

export default LoginPage
