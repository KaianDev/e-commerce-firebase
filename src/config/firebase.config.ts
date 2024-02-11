import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAoM8UvOHdx7EEOKjxGOIvXUFSow46yp_Q',
  authDomain: 'club-e-commerce-f452a.firebaseapp.com',
  projectId: 'club-e-commerce-f452a',
  storageBucket: 'club-e-commerce-f452a.appspot.com',
  messagingSenderId: '513322827841',
  appId: '1:513322827841:web:2e6387d66786d169e206c0',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
