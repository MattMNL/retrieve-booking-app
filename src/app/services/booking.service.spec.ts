import { BookingService } from './booking.service'
import { GraphQLModule } from '../graphql/graphql.module'
import { HttpClientModule } from '@angular/common/http'
import { TestBed } from '@angular/core/testing'

describe('BookingService', () => {
  let service: BookingService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GraphQLModule, HttpClientModule],
    })
    service = TestBed.inject(BookingService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
