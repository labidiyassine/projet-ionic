import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.page.html',
  styleUrls: ['./circuit.page.scss'],
})
export class CircuitPage implements OnInit {
  circuits: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.loadCircuits();
  }

  loadCircuits() {
    this.dataService.getCircuits().subscribe(
      (data: any) => {
        console.log('Fetched Circuits:', data);
        this.circuits = data.documents || [];
      },
      error => {
        console.error('Error fetching circuits:', error);
      }
    );
  }

  goToCircuitDetail(circuitId: string) {
    this.router.navigate(['/circuit-detail', circuitId]);
  }
}
