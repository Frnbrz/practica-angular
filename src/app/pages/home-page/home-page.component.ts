import { Component, inject } from '@angular/core'
import { FiltersComponent } from '../../components/filters/filters.component'
import { PostCardComponent } from '../../components/post-card/post-card.component'
import { PostHeroComponent } from '../../components/post-hero/post-hero.component'
import { Post } from '../../interfaces/post.interface'
import { PostService } from '../../services/post.service'
import { Category } from '../../interfaces/category.interface'

@Component({
  selector: 'app-home-page',
  imports: [PostCardComponent, PostHeroComponent, FiltersComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  postService = inject(PostService)
  firstPost: Post | undefined
  posts: Post[] = []

  ngOnInit() {
    this.getData()
  }

  getData() {
    const allPosts = this.postService.getAll()
    this.firstPost = allPosts[0]
    this.posts = allPosts.slice(1)
  }

  getDataByCategory(category: Category) {
    const allPosts = this.postService.getByCategory(category.id)
    this.firstPost = allPosts[0]
    this.posts = allPosts.slice(1)
  }

  onApplyFilters($event: string) {}
}
