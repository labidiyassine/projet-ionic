import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
@Component({
  selector: 'app-circuit-detail',
  templateUrl: './circuit-detail.page.html',
  styleUrls: ['./circuit-detail.page.scss'],
})
export class CircuitDetailPage implements OnInit {
  circuit: any;
  loading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit() {
    const circuitId = this.route.snapshot.paramMap.get('id');
    console.log(circuitId);
    if (circuitId) {
      this.loadCircuitDetails(circuitId);
    } else {
      console.error('Circuit ID is null');
      alert('Invalid circuit ID. Please go back and try again.');
      this.loading = false; 
    }
  }
  loadCircuitDetails(id: string) {
    this.dataService.getCircuitById(id).subscribe(
      (data: any) => {
        this.circuit = data;
        this.loading = false; 
      },
      error => {
        console.error('Error fetching circuit details:', error);
        this.loading = false; 
        alert('Failed to load circuit details. Please try again later.');
      }
    );
  }
}