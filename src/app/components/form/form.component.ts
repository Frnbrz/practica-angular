import { Component, EventEmitter, inject, Output } from '@angular/core'
import {
  AbstractControl,
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
      author: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      imageUrl: new FormControl(null, [Validators.required, this.urlValidator]),
      category: new FormControl(null, [Validators.required]),
    })
    this.form = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      text: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      author: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ]),
      imageUrl: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
    })
  }

  urlValidator(control: AbstractControl) {
    const url = control.value
    const regex = new RegExp(
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/
    )

    if (!url) {
      return null
    }

    if (regex.test(url)) {
      return { urlvalidator: true }
    }

    return null
  }

  onSubmit() {
    if (!this.form.invalid) {
      this.onFormEmit.emit(this.form.value)
    }
  }
}
