import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { isEmail } from 'validator'

// Components
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import Header from '../../components/Header'
import InputWrapper from '../../components/InputWrapper'

// Styles
import * as C from './styles'
import ErrorMessage from '../../components/ErrorMessage'

interface SignUpForm {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirm: string
}

const SignUpPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<SignUpForm>()

  const handleSignInSubmit = (data: SignUpForm) => {
    console.log(data)
  }

  return (
    <>
      <Header />
      <C.SignUpContainer>
        <C.SignUpContent>
          <C.SignUpTitle>Crie sua conta</C.SignUpTitle>
          <hr />

          <InputWrapper label="Nome" id="firstName">
            <CustomInput
              {...register('firstName', { required: true })}
              placeholder="Digite seu nome"
              id="firstName"
              hasError={!!errors?.firstName}
            />
            {errors.firstName?.type === 'required' && (
              <ErrorMessage>Campo Obrigatório</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper label="Sobrenome" id="lastName">
            <CustomInput
              {...register('lastName', { required: true })}
              placeholder="Digite seu sobrenome"
              id="lastName"
              hasError={!!errors?.lastName}
            />
            {errors.lastName?.type === 'required' && (
              <ErrorMessage>Campo Obrigatório</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper label="E-mail" id="email">
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
            {errors.email?.type === 'validate' && (
              <ErrorMessage>
                E-mail inválido, informe um e-mail válido!
              </ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper label="Senha" id="password">
            <CustomInput
              {...register('password', { required: true })}
              placeholder="Digite sua senha"
              id="password"
              type="password"
              hasError={!!errors?.password}
            />
            {errors.password?.type === 'required' && (
              <ErrorMessage>Campo Obrigatório</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper label="Confirme sua Senha" id="passwordConfirm">
            <CustomInput
              {...register('passwordConfirm', {
                required: true,
                validate: (value) => value === getValues('password'),
              })}
              placeholder="Confirme sua senha"
              id="passwordConfirm"
              type="password"
              hasError={!!errors?.passwordConfirm}
            />
            {errors.passwordConfirm?.type === 'required' && (
              <ErrorMessage>Campo Obrigatório</ErrorMessage>
            )}
            {errors.passwordConfirm?.type === 'validate' && (
              <ErrorMessage>As senhas não conferem</ErrorMessage>
            )}
          </InputWrapper>

          <CustomButton onClick={handleSubmit(handleSignInSubmit)}>
            <FiLogIn size={20} />
            Criar Conta
          </CustomButton>
        </C.SignUpContent>
      </C.SignUpContainer>
    </>
  )
}

export default SignUpPage
