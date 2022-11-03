import { ChangeDetectionStrategy, Component, Inject } from '@angular/core'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookingDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
