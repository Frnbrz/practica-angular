import { Injectable } from '@angular/core'
import { Category } from '../interfaces/category.interface'
import { posts } from '../db/post.db'

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  getAll(): Category[] {
    const uniqueCategories = new Map<number, Category>()
    posts.forEach((post) => {
      if (!uniqueCategories.has(post.category.id)) {
        uniqueCategories.set(post.category.id, post.category)
      }
    })
    return Array.from(uniqueCategories.values())
  }
}
