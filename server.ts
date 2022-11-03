const express = require('express')
const cors = require('cors')
const mockJsonFile = require('./mock.json')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const port = 3000
const schema = buildSchema(`
  type ContactDetail {
    address: String
    class: String
  }

  type Country {
    code: String
    name: String
  }

  type City {
    IATACode: String
    country: Country
    name: String
  }

  type Destination {
    IATACode: String
    city: City
    name: String
  }

  type Country2 {
    code: String
    name: String
  }

  type City1 {
    IATACode: String
    country: Country2
    name: String
  }

  type Origin {
    IATACode: String
    city: City1
    name: String
  }

  type Country4 {
    code: String
    name: String
  }

  type City3 {
    IATACode: String
    country: Country4
    name: String
  }

  type ArriveOn {
    IATACode: String
    city: City3
    name: String
  }

  type Country6 {
    code: String
    name: String
  }

  type City5 {
    IATACode: String
    country: Country6
    name: String
  }

  type DepartFrom {
    IATACode: String
    city: City5
    name: String
  }

  type Carrier {
    code: String
    name: String
  }

  type ArrivalTerminal {
    name: String
  }

  type Cabin {
    code: String
    name: String
  }

  type Carrier7 {
    code: String
    name: String
  }

  type Equipment {
    code: String
    name: String
  }

  type OperatingFlight {
    arrivalTerminal: ArrivalTerminal
    cabin: Cabin
    carrier: Carrier7
    checkInEnd: String
    checkInStart: String
    duration: String
    equipment: Equipment
    flown: Boolean
    localCheckInEnd: String
    localCheckInStart: String
    localScheduledArrival: String
    localScheduledDeparture: String
    number: String
    scheduledArrival: String
    scheduledDeparture: String
  }

  type SellingClass {
    code: String
  }

  type Status {
    code: String
    name: String
  }

  type MarketingFlight {
    carrier: Carrier
    number: String
    numberOfStops: Int
    operatingFlight: OperatingFlight
    sellingClass: SellingClass
    status: Status
  }

  type Segment {
    arriveOn: ArriveOn
    departFrom: DepartFrom
    id: Int
    informational: Boolean
    marketingFlight: MarketingFlight
    type: String
  }

  type Connection {
    destination: Destination
    duration: String
    id: Int
    origin: Origin
    segments: [Segment]
  }

  type Itinerary {
    connections: [Connection]
    type: String
  }

  type Title {
    code: String
    name: String
  }

  type Passengers {
    firstName: String
    id: Int
    lastName: String
    title: Title
  }

  type Query {
    bookingCode: String
    contactDetails: [ContactDetail]
    itinerary: Itinerary
    passengers: Passengers
  }
`)
const app = express()

app.use(cors())
app.use(
  '/booking',
  graphqlHTTP({
    schema: schema,
    rootValue: mockJsonFile,
  })
)
app.listen(port, () => console.log(`GraphQL server listening on port ${port}`))
