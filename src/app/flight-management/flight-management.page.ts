import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-management',
  templateUrl: './flight-management.page.html',
  styleUrls: ['./flight-management.page.scss'],
})
export class FlightManagementPage implements OnInit {
  flights: any[] = [];

  constructor(private flightService: FlightService, private router: Router) {}

  ngOnInit() {
    this.loadFlights();
  }

  loadFlights() {
    this.flightService.getAllFlights().subscribe(
      (data: any) => {
        console.log('Fetched Flights:', data);
        this.flights = data.documents || []; 
        console.log('Flights:', this.flights);
      },
      error => {
        console.error('Error fetching flights:', error);
      }
    );
  }

  editFlight(flight: any) {
    const flightId = flight.name.split('/').pop();
    if (flightId) {
      this.router.navigate(['/flight-form', flightId]);
    } else {
      console.error('Flight ID is undefined');
    }
  }

  deleteFlight(flight: any) {
    const flightId = flight.name.split('/').pop();
    if (flightId) {
      this.flightService.deleteFlight(flightId).subscribe(
        () => {
          console.log(`Flight with ID ${flightId} deleted successfully.`);
          this.loadFlights(); 
        },
        error => {
          console.error('Error deleting flight:', error);
        }
      );
    } else {
      console.error('Flight ID is undefined');
    }
  }
}