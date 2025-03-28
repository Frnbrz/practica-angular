import { Injectable } from '@angular/core'
import { Category } from '../interfaces/category.interface'
import { categories } from '../db/category.db'

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  getAll(): Category[] {
    return categories
  }
}
