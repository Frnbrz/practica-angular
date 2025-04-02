import { Category } from './category.interface'

export interface Post {
  id: number
  title: string
  text: string
  author: string
  imageUrl: string
  publicationDate?: string
  category: Category
}
