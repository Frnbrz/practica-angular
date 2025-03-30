import { Injectable } from '@angular/core'
import { Post } from '../interfaces/post.interface'
import { posts } from '../db/post.db'

@Injectable({
  providedIn: 'root',
})
export class PostService {
  getAll(): Post[] {
    return posts
  }

  getByCategory(categoryIndex: number): Post[] {
    return posts.filter((post) => post.category === categoryIndex)
  }

  getById(id: number): Post | undefined {
    return posts.find((post) => post.id === id)
  }

  insert(post: Post) {
    posts.push(post)
  }
}
