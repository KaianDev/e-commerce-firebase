import { collection, getDocs, query, where } from 'firebase/firestore'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'

// Pages
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import CategoryDetailsPage from './pages/CategoryDetailsPage'
import CheckoutPage from './pages/CheckoutPage'

// Components
import Loading from './components/Loading'
import Cart from './components/Cart'

// Utilities
import { auth, db } from './config/firebase.config'
import { useUserContext } from './context/user.context'
import { useState } from 'react'
import { userConverter } from './converters/firestore.converters'
import AuthenticationGuard from './guards/authentication.guard'

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
        query(
          collection(db, 'users'),
          where('id', '==', user.uid),
        ).withConverter(userConverter),
      )
      const currentUser = querySnapshot.docs[0].data()
      loginUser(currentUser)
      return setIsStarting(false)
    }
    setIsStarting(false)
  })

  if (isStarting) return <Loading />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route
          path="/checkout"
          element={
            <AuthenticationGuard>
              <CheckoutPage />
            </AuthenticationGuard>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
      <Cart />
    </BrowserRouter>
  )
}

export default App
