import { Component, inject, Input } from '@angular/core'
import { Post } from '../../interfaces/post.interface'
import { CategoriesService } from '../../services/categories.service'
import { Category } from '../../interfaces/category.interface'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-post-hero',
  imports: [RouterLink],
  templateUrl: './post-hero.component.html',
  styleUrl: './post-hero.component.scss',
})
export class PostHeroComponent {
  @Input() post: Post | undefined
  categoryService = inject(CategoriesService)
  category: Category | undefined

  ngOnInit() {
    this.category = this.categoryService.getAll().find((category) => {
      return category.id === this.post?.category
    })
  }
}
