import { Apollo, gql } from 'apollo-angular'
import { Injectable } from '@angular/core'

const GET_BOOKING_DEFAULT_QUERY = gql`
  {
    itinerary {
      connections {
        origin {
          name
          city {
            name
            IATACode
          }
        }
        destination {
          name
          city {
            name
            IATACode
          }
        }
        segments {
          marketingFlight {
            operatingFlight {
              scheduledDeparture
              scheduledArrival
            }
          }
        }
      }
    }
  }
`

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  constructor(private apollo: Apollo) {}

  getBooking(
    bookingCode: String | undefined,
    familyName: String | undefined,
    getBookingQuery = GET_BOOKING_DEFAULT_QUERY
  ) {
    // TODO: Out of time for assignment, but here we could use bookingCode & familyName to add as variables to the query to get a specific booking
    return this.apollo.watchQuery<any>({
      query: getBookingQuery,
    }).valueChanges
  }
}
