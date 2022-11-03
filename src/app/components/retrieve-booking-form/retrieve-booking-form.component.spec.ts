import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BookingService } from 'src/app/services/booking.service'
import { GraphQLModule } from 'src/app/graphql/graphql.module'
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule } from '@angular/material/dialog'
import { ReactiveFormsModule } from '@angular/forms'
import { RetrieveBookingFormComponent } from './retrieve-booking-form.component'

describe('RetrieveBookingFormComponent', () => {
  let component: RetrieveBookingFormComponent
  let fixture: ComponentFixture<RetrieveBookingFormComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetrieveBookingFormComponent],
      imports: [
        GraphQLModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatDialogModule,
      ],
      providers: [BookingService],
    }).compileComponents()

    fixture = TestBed.createComponent(RetrieveBookingFormComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
