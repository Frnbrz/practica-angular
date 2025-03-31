import { inject, Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  _snackBar = inject(MatSnackBar)

  snowSnackbar(message: string, action = 'ok'): void {
    this._snackBar.open(message, action, {
      duration: 2000,
      verticalPosition: 'top',
    })
  }
}
