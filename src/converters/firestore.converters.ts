import type Category from '../types/Category'
import type User from '../types/User'
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

export const userConverter = {
  toFirestore(user: User): DocumentData {
    return { ...user }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions,
  ): User {
    const data = snapshot.data(options)

    return {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      provider: data.provider,
    }
  },
}
