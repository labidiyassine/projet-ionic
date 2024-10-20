import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.page.html',
  styleUrls: ['./flight.page.scss'],
})
export class FlightPage implements OnInit {

  flights: any[] = [];

  newFlight: any = {};

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.loadFlights();

  }

  loadFlights() {
    this.dataService.getFlights().subscribe((data:any) => {

      console.log('Fetched Flights',data)
      this.flights = data.documents || [];
      console.log('Flights',this.flights)
    },
    error =>{
    console.error  ('Error fetching flights:', error)
    }
  
  );
}




}