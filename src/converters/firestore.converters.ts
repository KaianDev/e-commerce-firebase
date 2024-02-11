import type Category from '../types/Category'
import type {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from 'firebase/firestore'

export const categoryConverter = {
  toFirestore(category: Category): DocumentData {
    return { ...category }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): Category {
    const data = snapshot.data(options)

    return {
      id: data.id,
      displayName: data.displayName,
      name: data.name,
      imageUrl: data.imageUrl,
      products: data.products,
    }
  },
}
