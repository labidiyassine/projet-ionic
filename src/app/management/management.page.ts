import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management',
  templateUrl: './management.page.html',
  styleUrls: ['./management.page.scss'],
})
export class ManagementPage {
  constructor(private router: Router) {}

  goToHotelManagement() {
    this.router.navigate(['/hotel-management']);
  }

  goToFlightManagement() {
    this.router.navigate(['/flight-management']);
  }

  goToCircuitManagement() {
    this.router.navigate(['/circuit-management']);
  }
}
