import { Component, inject } from '@angular/core'
import { FormComponent } from '../../components/form/form.component'
import { Post } from '../../interfaces/post.interface'
import { PostService } from '../../services/post.service'
import { Router, RouterModule } from '@angular/router'
import { SnackbarService } from '../../services/snackbar.service'

@Component({
  selector: 'app-new-post',
  imports: [FormComponent],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.scss',
})
export class NewPostComponent {
  _snackBar = inject(SnackbarService)
  router = inject(Router)
  postService = inject(PostService)

  createPost($event: Post) {
    this.postService.insert({ ...$event, publicationDate: String(Date.now()) })
    this.router.navigate(['/home'])
    this._snackBar.snowSnackbar('Creada la publicación con éxito')
  }
}
