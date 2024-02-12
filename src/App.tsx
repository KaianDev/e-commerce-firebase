//Components
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

// Pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

// Utilities
import { auth } from './config/firebase.config'

const App = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
