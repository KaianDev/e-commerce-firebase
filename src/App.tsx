import { useEffect, useState } from 'react'
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
import PaymentConfirmationPage from './pages/PaymentConfirmationPage'

// Components
import Loading from './components/Loading'
import Cart from './components/Cart'

// Utilities
import { auth, db } from './config/firebase.config'
import { userConverter } from './converters/firestore.converters'
import AuthenticationGuard from './guards/authentication.guard'
import { loginUser, logoutUser } from './store/reducers/user/user.actions'
import { useAppDispatch, useAppSelector } from './hooks/redux.hooks'

const App = () => {
  const [isStarting, setIsStarting] = useState(true)

  const { isAuthenticated } = useAppSelector(
    (rootState) => rootState.userReducer,
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      const isSignOutUser = isAuthenticated && !user
      if (isSignOutUser) {
        dispatch(logoutUser())
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
        dispatch(loginUser(currentUser))
        return setIsStarting(false)
      }
      setIsStarting(false)
    })
  }, [dispatch])

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
        <Route
          path="/payment-confirmation"
          element={<PaymentConfirmationPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
      <Cart />
    </BrowserRouter>
  )
}

export default App
