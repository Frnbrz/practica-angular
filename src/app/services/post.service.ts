import { Injectable } from '@angular/core'
import { Post } from '../interfaces/post.interface'
import { posts } from '../db/post.db'
import { Category } from '../interfaces/category.interface'

@Injectable({
  providedIn: 'root',
})
export class PostService {
  getAll(): Post[] {
    return posts
  }

  getByCategory(category: string): Post[] {
    return posts.filter((post) => post.category.name === category)
  }

  getById(id: number): Post | undefined {
    return posts.find((post) => post.id === id)
  }

  getByName(name: string): Post[] {
    return posts.filter((post) => post.title.includes(name))
  }

  insert(post: Post) {
    posts.push(post)
  }
}
