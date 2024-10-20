import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CircuitService } from '../circuit.service';

@Component({
  selector: 'app-circuit-management',
  templateUrl: './circuit-management.page.html',
  styleUrls: ['./circuit-management.page.scss'],
})
export class CircuitManagementPage implements OnInit {
  circuits: any[] = [];

  constructor(private circuitService: CircuitService, public router: Router) {}

  ngOnInit() {
    this.loadCircuits();
  }

  loadCircuits() {
    this.circuitService.getAllCircuits().subscribe(
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

  editCircuit(circuit: any) {
    const circuitId = circuit.name.split('/').pop();
    if (circuitId) {
      this.router.navigate(['/circuit-form', circuitId]);
    } else {
      console.error('Circuit ID is undefined');
    }
  }

  deleteCircuit(circuit: any) {
    const circuitId = circuit.name.split('/').pop();
    if (circuitId) {
      this.circuitService.deleteCircuit(circuitId).subscribe(
        () => {
          console.log(`Circuit with ID ${circuitId} deleted successfully.`);
          this.loadCircuits(); // Refresh the list after deletion
        },
        error => {
          console.error('Error deleting circuit:', error);
        }
      );
    } else {
      console.error('Circuit ID is undefined');
    }
  }
}