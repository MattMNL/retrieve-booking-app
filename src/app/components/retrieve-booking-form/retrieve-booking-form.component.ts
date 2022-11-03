import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core'
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms'
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component'
import { BookingService } from '../../services/booking.service'
import { MatDialog } from '@angular/material/dialog'
import { RetrieveBookingForm } from '../../models/retrieve-booking-form.model'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-retrieve-booking-form',
  templateUrl: './retrieve-booking-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RetrieveBookingFormComponent implements OnDestroy {
  retrieveBookingForm: FormGroup<RetrieveBookingForm>

  bookingCodeMinLength = 5
  bookingCodeMaxLength = 6

  familyNameMinLength = 8
  familyNameMaxLength = 30

  private querySubscription: Subscription = new Subscription()

  get bookingCodeControlErrors(): ValidationErrors | null {
    return this.retrieveBookingForm.controls.bookingCode.errors
  }

  get familyNameControlErrors(): ValidationErrors | null {
    return this.retrieveBookingForm.controls.familyName.errors
  }

  constructor(
    private bookingService: BookingService,
    private fb: FormBuilder,
    private dialog: MatDialog
  ) {
    this.createRetrieveBookingForm()
  }

  private createRetrieveBookingForm(): void {
    this.retrieveBookingForm = this.fb.nonNullable.group({
      bookingCode: [
        '5SFDF5',
        [
          Validators.required,
          Validators.minLength(this.bookingCodeMinLength),
          Validators.maxLength(this.bookingCodeMaxLength),
          Validators.pattern('[A-Za-z2-9]*'),
        ],
      ],
      familyName: [
        'Gaillard',
        [
          Validators.required,
          Validators.minLength(this.familyNameMinLength),
          Validators.maxLength(this.familyNameMaxLength),
        ],
      ],
    })
  }

  onSubmit(): void {
    const { bookingCode, familyName } = this.retrieveBookingForm.value

    this.querySubscription = this.bookingService
      .getBooking(bookingCode, familyName)
      .subscribe(({ data }: any) =>
        this.dialog.open(BookingDialogComponent, { data })
      )
  }

  ngOnDestroy(): void {
    this.querySubscription.unsubscribe()
  }
}
