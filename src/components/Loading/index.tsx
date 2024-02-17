import PulseLoader from 'react-spinners/PulseLoader'

// Utilities
import Colors from '../../theme/theme.colors'

// Styles
import { LoadingContainer } from './styles'

interface LoadingProps {
  message?: string
}

const Loading = ({ message }: LoadingProps) => {
  return (
    <LoadingContainer>
      {message && <p>{message}</p>}
      <PulseLoader size={30} color={Colors.primary} />
    </LoadingContainer>
  )
}

export default Loading
