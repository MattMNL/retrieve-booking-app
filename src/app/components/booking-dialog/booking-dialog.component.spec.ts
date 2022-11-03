import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BookingDialogComponent } from './booking-dialog.component'
import { MAT_DIALOG_DATA } from '@angular/material/dialog'

describe('BookingDialogComponent', () => {
  let component: BookingDialogComponent
  let fixture: ComponentFixture<BookingDialogComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingDialogComponent],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            itinerary: {
              connections: [
                {
                  origin: {
                    name: 'Schiphol',
                    city: {
                      name: 'Amsterdam',
                      IATACode: 'AMS',
                    },
                  },
                  destination: {
                    name: "Cote D'Azur Airport",
                    city: { name: 'Nice', IATACode: 'NCE' },
                  },
                  segments: [
                    {
                      marketingFlight: {
                        operatingFlight: {
                          scheduledDeparture: '2016-10-14T09:35+02:00',
                          scheduledArrival: '2016-10-14T11:35+02:00',
                        },
                      },
                    },
                  ],
                },
              ],
            },
          },
        },
      ],
    }).compileComponents()

    fixture = TestBed.createComponent(BookingDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
