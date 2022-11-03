import { AppComponent } from './app.component'
import { BookingDialogComponent } from './components/booking-dialog/booking-dialog.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { GraphQLModule } from './graphql/graphql.module'
import { HeaderComponent } from './components/header/header.component'
import { HttpClientModule } from '@angular/common/http'
import { MatDialogModule } from '@angular/material/dialog'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RetrieveBookingFormComponent } from './components/retrieve-booking-form/retrieve-booking-form.component'

@NgModule({
  declarations: [
    AppComponent,
    RetrieveBookingFormComponent,
    HeaderComponent,
    BookingDialogComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
