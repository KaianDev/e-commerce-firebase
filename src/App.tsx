import { collection, getDocs, query, where } from 'firebase/firestore'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

// Pages
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'

// Utilities
import { auth, db } from './config/firebase.config'
import { useUserContext } from './context/user.context'
import { useState } from 'react'

const App = () => {
  const [isStarting, setIsStarting] = useState(true)
  const { isAuthenticated, loginUser, logoutUser } = useUserContext()

  onAuthStateChanged(auth, async (user) => {
    const isSignOutUser = isAuthenticated && !user
    if (isSignOutUser) {
      logoutUser()
      return setIsStarting(false)
    }

    const isSignInUser = !isAuthenticated && user
    if (isSignInUser) {
      const querySnapshot = await getDocs(
        query(collection(db, 'users'), where('id', '==', user.uid)),
      )

      const userFromFirestore = querySnapshot.docs[0].data()

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      loginUser(userFromFirestore as any)
      return setIsStarting(false)
    }
  })

  if (isStarting) return null

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
