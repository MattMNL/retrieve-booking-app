import { FormControl } from '@angular/forms'

export interface RetrieveBookingForm {
  bookingCode: FormControl<string>
  familyName: FormControl<string>
}
