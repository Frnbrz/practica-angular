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
  @Output() applyFilters: EventEmitter<string> = new EventEmitter()
  nameFilter: string = ''
  selectedCategory: string = ''
  categories: Category[] = []
  categoriesService = inject(CategoriesService)

  ngOnInit() {
    this.categories = this.categoriesService.getAll()
  }

  onApplyFilers() {
    this.applyFilters.emit(this.selectedCategory)
  }
}
