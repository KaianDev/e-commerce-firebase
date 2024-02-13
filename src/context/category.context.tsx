import { createContext, useContext, useState } from 'react'
import { categoryConverter } from '../converters/firestore.converters'

// Utilities
import Category from '../types/Category'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase.config'

interface ICategoryContext {
  categories: Category[]
  fetchCategories: () => Promise<void>
  isLoading: boolean
}

const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: async () => {},
  isLoading: false,
})

interface CategoryContextProviderProps {
  children: React.ReactNode
}

const CategoryContextProvider = ({
  children,
}: CategoryContextProviderProps) => {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchCategories = async () => {
    try {
      setIsLoading(true)
      const categoryFromFirestore: Category[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter),
      )
      querySnapshot.forEach((doc) => {
        categoryFromFirestore.push(doc.data())
      })
      setCategories(categoryFromFirestore)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CategoryContext.Provider
      value={{ categories, fetchCategories, isLoading }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export const useCategoryContext = () => useContext(CategoryContext)

export default CategoryContextProvider
