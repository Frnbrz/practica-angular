import { Component, inject, Input } from '@angular/core'
import { Post } from '../../interfaces/post.interface'
import { PostService } from '../../services/post.service'
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-post-detail',
  imports: [DatePipe],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.scss',
})
export class PostDetailComponent {
  @Input() idPost: string = ''
  post: Post | undefined
  postsService = inject(PostService)

  ngOnInit() {
    if (this.idPost) {
      this.loadPost()
    }
  }

  loadPost() {
    this.post = this.postsService.getById(Number(this.idPost))
  }
}
