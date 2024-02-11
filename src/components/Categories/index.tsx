import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converters'

import type Category from '../../types/Category'

// Styles
import * as C from './styles'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const categoriesFromFireStore: Category[] = []
      if (db) {
        const querySnapshot = await getDocs(
          collection(db, 'categories').withConverter(categoryConverter),
        )
        querySnapshot.forEach((doc) => {
          categoriesFromFireStore.push(doc.data())
        })
        setCategories(categoriesFromFireStore)
      }
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <C.CategoriesContainer>
      <C.CategoriesContent>
        {categories.map((item) => (
          <C.CategoryItem imageUrl={item.imageUrl} key={item.id}>
            <C.CategoryItemContent>
              <strong>{item.displayName}</strong>
              <p>Explorar</p>
            </C.CategoryItemContent>
          </C.CategoryItem>
        ))}
      </C.CategoriesContent>
    </C.CategoriesContainer>
  )
}

export default Categories
