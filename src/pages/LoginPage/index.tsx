import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { isEmail } from 'validator'
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Components
import CustomButton from '../../components/CustomButton'
import Header from '../../components/Header'
import CustomInput from '../../components/CustomInput'
import InputWrapper from '../../components/InputWrapper'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'

// Styles
import * as C from './styles'

// Utilities
import { auth, db, googleProvider } from '../../config/firebase.config'
import { useAppSelector } from '../../hooks/redux.hooks'

interface LoginForm {
  email: string
  password: string
}

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<LoginForm>()

  const { isAuthenticated } = useAppSelector(
    (rootState) => rootState.userReducer,
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  const handleSignWithCredentials = async (data: LoginForm) => {
    try {
      setLoading(true)
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password,
      )
      console.log(userCredentials)
    } catch (error) {
      const _error = error as AuthError
      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        setError('email', { type: 'invalidCredentials' })
        setError('password', { type: 'invalidCredentials' })
        return
      }
    } finally {
      setLoading(false)
    }
  }

  const handleSignInWithGoogle = async () => {
    try {
      setLoading(true)
      const userCredentials = await signInWithPopup(auth, googleProvider)
      const querySnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where('id', '==', userCredentials.user.uid),
        ),
      )
      const user = querySnapshot.docs[0]?.data

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(' ')[0]
        const lastName = userCredentials.user.displayName?.split(' ')[1]

        await addDoc(collection(db, 'users'), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          provider: 'google',
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Header />
      {loading && <Loading />}
      <C.LoginContainer>
        <C.LoginContent>
          <C.LoginTitle>Entre com sua conta</C.LoginTitle>

          <CustomButton onClick={handleSignInWithGoogle}>
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

          <CustomButton onClick={handleSubmit(handleSignWithCredentials)}>
            <FiLogIn size={20} />
            Entrar
          </CustomButton>
        </C.LoginContent>
      </C.LoginContainer>
    </>
  )
}

export default LoginPage
