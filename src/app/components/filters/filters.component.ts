import { Component, EventEmitter, inject, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Category } from '../../interfaces/category.interface'
import { CategoriesService } from '../../services/categories.service'

@Component({
  selector: 'app-filters',
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
})
export class FiltersComponent {
  @Output() applyNameFilters: EventEmitter<string> = new EventEmitter()
  @Output() applyCategoryFilters: EventEmitter<string> = new EventEmitter()
  nameFilter: string = ''
  selectedCategory: string = ''
  categories: Category[] = []
  categoriesService = inject(CategoriesService)

  ngOnInit() {
    this.categories = this.categoriesService.getAll()
  }

  onNameFilter() {
    this.applyNameFilters.emit(this.nameFilter)
  }
  onCategoryFilter() {
    this.applyCategoryFilters.emit(this.selectedCategory)
  }
}
