import { Component, EventEmitter, inject, Output } from '@angular/core'
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { CategoriesService } from '../../services/categories.service'
import { Category } from '../../interfaces/category.interface'
import { Post } from '../../interfaces/post.interface'

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Output() onFormEmit: EventEmitter<Post> = new EventEmitter()
  form: FormGroup
  categories: Category[] = []
  categoryService = inject(CategoriesService)

  ngOnInit() {
    this.categories = this.categoryService.getAll()
  }

  constructor() {
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      text: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      imageUrl: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
        ),
      ]),
      category: new FormControl(null, [Validators.required]),
    })
  }

  onSubmit() {
    this.onFormEmit.emit(this.form.value)
  }
}
