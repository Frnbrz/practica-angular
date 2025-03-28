import { Component } from '@angular/core'
import { FormComponent } from '../../components/form/form.component'

@Component({
  selector: 'app-new-post',
  imports: [FormComponent],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.scss',
})
export class NewPostComponent {}
