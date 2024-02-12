interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  provider: 'google' | 'firebase'
}

export default User
