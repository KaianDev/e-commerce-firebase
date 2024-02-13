import { LoadingContainer } from './styles'
import PulseLoader from 'react-spinners/PulseLoader'

const Loading = () => {
  return (
    <LoadingContainer>
      <PulseLoader size={30} />
    </LoadingContainer>
  )
}

export default Loading
