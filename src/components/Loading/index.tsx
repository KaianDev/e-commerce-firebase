import Colors from '../../theme/theme.colors'
import { LoadingContainer } from './styles'
import PulseLoader from 'react-spinners/PulseLoader'

const Loading = () => {
  return (
    <LoadingContainer>
      <PulseLoader size={30} color={Colors.primary} />
    </LoadingContainer>
  )
}

export default Loading
