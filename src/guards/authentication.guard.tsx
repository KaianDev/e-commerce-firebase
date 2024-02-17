import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

// Utilities
import { useUserContext } from '../context/user.context'

// Components
import Loading from '../components/Loading'
import Header from '../components/Header'

interface AuthenticationGuardProps {
  children: React.ReactNode
}

const AuthenticationGuard = ({ children }: AuthenticationGuardProps) => {
  const { isAuthenticated } = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated)
    return (
      <>
        <Header />
        <Loading message="Você precisa estar logado para acessar esta página. Você será redirecionado para a página de login em instantes..." />
      </>
    )

  return <>{children}</>
}

export default AuthenticationGuard
