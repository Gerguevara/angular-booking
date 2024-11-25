import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Booking } from '../../interfaces/booking.type';

@Component({
  selector: 'app-booking-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule ],
  templateUrl: './booking-card.component.html',
  styleUrl: './booking-card.component.scss'
})
export class BookingCardComponent {

  bookingInformation = input.required<Booking>()
}
