import { DatePipe } from '@angular/common'
import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { Post } from '../../interfaces/post.interface'
import { PostService } from '../../services/post.service'

@Component({
  selector: 'app-home-page',
  imports: [DatePipe, RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
  postService = inject(PostService)
  posts: Post[] = []

  ngOnInit() {
    this.posts = this.postService.getAll()
  }
}
