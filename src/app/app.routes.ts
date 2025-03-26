import { Routes } from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component'
import { NewPostComponent } from './pages/new-post/new-post.component'
import { PostDetailComponent } from './pages/post-detail/post-detail.component'
import { ErrorPageComponent } from './pages/error-page/error-page.component'

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'new',
    component: NewPostComponent,
  },
  {
    path: 'post/:idPost',
    component: PostDetailComponent,
  },
  {
    path: '**',
    component: ErrorPageComponent,
  },
]
