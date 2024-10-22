import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { CircuitService } from '../circuit.service';
import { FlightService } from '../flight.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  popularHotels: any[] = [];
  popularCircuits: any[] = [];
  popularFlights: any[] = [];

  constructor(
    private router: Router,
    private bookingService: BookingService,
    private circuitService: CircuitService,
    private flightService: FlightService
  ) {}

  ngOnInit() {
    this.loadHotels();
    this.loadCircuits();
    this.loadFlights();
  }

  goToHotels() {
    this.router.navigate(['/hotel']);
  }
  goToFlights(){
    this.router.navigate(['/flight']);

  }
  goToCircuits(){
    this.router.navigate(['/circuit']);
  }
  loadHotels() {
    this.bookingService.getAllHotels().subscribe({
      next: (data: any) => {
        console.log('Hotels Data:', data); // Log the hotel data
        this.popularHotels = data.documents.map((doc: any) => ({
          name: doc.fields?.name?.stringValue || 'No Name',
          description: doc.fields?.description?.stringValue || 'No Description',
          imageUrl: doc.fields?.imageUrl?.stringValue || 'assets/default-hotel.jpg' // Default image if not available
        }));
      },
      error: (err) => {
        console.error('Error loading hotels:', err);
      }
    });
  }

  loadCircuits() {
    this.circuitService.getAllCircuits().subscribe({
      next: (data: any) => {
        console.log('Circuits Data:', data); // Log the circuit data
        this.popularCircuits = data.documents.map((doc: any) => ({
          name: doc.fields?.name?.stringValue || 'No Name',
          description: doc.fields?.description?.stringValue || 'No Description',
          imageUrl: doc.fields?.imageUrl?.stringValue || 'assets/default-circuit.jpg' // Default image if not available
        }));
      },
      error: (err) => {
        console.error('Error loading circuits:', err);
      }
    });
  }

  loadFlights() {
    this.flightService.getAllFlights().subscribe({
      next: (data: any) => {
        console.log('Flights Data:', data); // Log the flight data
        this.popularFlights = data.documents.map((doc: any) => ({
          flightNumber: doc.fields?.flightNumber?.stringValue || 'No Flight Number',
          departure: doc.fields?.departure?.stringValue || 'No Departure',
          arrival: doc.fields?.arrival?.stringValue || 'No Arrival',
          price: doc.fields?.price?.doubleValue || 0 // Default price if not available
        }));
      },
      error: (err) => {
        console.error('Error loading flights:', err);
      }
    });
  }

  onSlideChange() {
    console.log('Slide changed');
  }
}
