import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { isEmail } from 'validator'
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
} from 'firebase/auth'

// Components
import CustomButton from '../../components/CustomButton'
import Header from '../../components/Header'
import CustomInput from '../../components/CustomInput'
import InputWrapper from '../../components/InputWrapper'
import ErrorMessage from '../../components/ErrorMessage'

// Styles
import * as C from './styles'

// Utilities
import { auth } from '../../config/firebase.config'

interface LoginForm {
  email: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<LoginForm>()

  const handleSubmitLoginClick = async (data: LoginForm) => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      )
      console.log(userCredentials)
    } catch (error) {
      console.log(error)
      const _error = error as AuthError
      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        setError('email', { type: 'invalidCredentials' })
        setError('password', { type: 'invalidCredentials' })
        return
      }
    }
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
            {errors?.email?.type === 'notFound' && (
              <ErrorMessage>E-mail não encontrado!</ErrorMessage>
            )}
            {errors.email?.type === 'invalidCredentials' && (
              <ErrorMessage>E-mail e/ou senha inválido(s)</ErrorMessage>
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
            {errors.password?.type === 'invalidCredentials' && (
              <ErrorMessage>E-mail e/ou senha inválido(s)</ErrorMessage>
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
