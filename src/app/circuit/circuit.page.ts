import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.page.html',
  styleUrls: ['./circuit.page.scss'],
})
export class CircuitPage implements OnInit {


  circuits: any[] = [];
  newCircuit: any = {};


  constructor(private dataService : DataService) { }

  ngOnInit() {

    this.loadCircuits();  }

 
  loadCircuits() {
    this.dataService.getHotels().subscribe(
      (data: any) => {
        console.log('Fetched Circuits:', data);
        this.circuits = data.documents || [];
        console.log('Circuits:', this.circuits);
      },
      error => {
        console.error('Error fetching circuits:', error);
      }
    );
  }
  
  // reserveCircuit(circuitId: any) {
  //   // Replace with the actual API endpoint
  //   const apiUrl = 'https://your-api-url.com/reserve-circuit';

  //   // Make a POST request to reserve the circuit
  //   this.http.post(apiUrl, { circuitId: circuitId })
  //     .subscribe(
  //       (response) => {
  //         console.log('Reservation successful:', response);
  //         // Handle the response, e.g., show a success message
  //       },
  //       (error) => {
  //         console.error('Error reserving circuit:', error);
  //         // Handle the error, e.g., show an error message
  //       }
  //     );
  // }
}
