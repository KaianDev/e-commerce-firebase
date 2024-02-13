import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { isEmail } from 'validator'
import {
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  AuthError,
} from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Components
import CustomButton from '../../components/CustomButton'
import CustomInput from '../../components/CustomInput'
import Header from '../../components/Header'
import InputWrapper from '../../components/InputWrapper'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'

// Styles
import * as C from './styles'

// Utilities
import { auth, db } from '../../config/firebase.config'
import { useUserContext } from '../../context/user.context'

interface SignUpForm {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirm: string
}

const SignUpPage = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError,
  } = useForm<SignUpForm>()

  const { isAuthenticated } = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  const handleSignUp = async (data: SignUpForm) => {
    try {
      setLoading(true)
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      )

      await addDoc(collection(db, 'users'), {
        id: userCredentials.user.uid,
        email: userCredentials.user.email,
        firstName: data.firstName,
        lastName: data.lastName,
        provider: 'firebase',
      })
    } catch (error) {
      const _error = error as AuthError
      if (_error.code === AuthErrorCodes.EMAIL_EXISTS) {
        setError('email', { type: 'emailExists' })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      {loading && <Loading />}
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
            {errors.email?.type === 'emailExists' && (
              <ErrorMessage>Endereço de e-mail já utilizado!</ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper label="Senha" id="password">
            <CustomInput
              {...register('password', { required: true, minLength: 6 })}
              placeholder="Digite sua senha"
              id="password"
              type="password"
              hasError={!!errors?.password}
            />
            {errors.password?.type === 'required' && (
              <ErrorMessage>Campo Obrigatório</ErrorMessage>
            )}
            {errors.password?.type === 'minLength' && (
              <ErrorMessage>
                A senha deve conter pelo menos 6 caracteres
              </ErrorMessage>
            )}
          </InputWrapper>

          <InputWrapper label="Confirme sua Senha" id="passwordConfirm">
            <CustomInput
              {...register('passwordConfirm', {
                required: true,
                minLength: 6,
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
            {errors.passwordConfirm?.type === 'minLength' && (
              <ErrorMessage>
                A senha deve conter pelo menos 6 caracteres
              </ErrorMessage>
            )}
          </InputWrapper>

          <CustomButton onClick={handleSubmit(handleSignUp)}>
            <FiLogIn size={20} />
            Criar Conta
          </CustomButton>
        </C.SignUpContent>
      </C.SignUpContainer>
    </>
  )
}

export default SignUpPage
