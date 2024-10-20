import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.page.html',
  styleUrls: ['./flight-form.page.scss'],
})
export class FlightFormPage implements OnInit {
  flightForm: FormGroup;
  flightId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private flightService: FlightService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.flightForm = this.fb.group({
      flightNumber: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {
    this.flightId = this.route.snapshot.paramMap.get('id');
    if (this.flightId) {
      this.loadFlight(this.flightId);
    }
  }

  loadFlight(id: string) {
    this.flightService.getFlightById(id).subscribe(
      (data: any) => {
        if (data && data.fields) {
          this.flightForm.patchValue({
            flightNumber: data.fields.flightNumber?.stringValue || '',
            departure: data.fields.departure?.stringValue || '',
            arrival: data.fields.arrival?.stringValue || '',
            price: data.fields.price?.doubleValue || '',
          });
        } else {
          console.error('Unexpected data structure:', data);
        }
      },
      error => {
        console.error('Error fetching flight:', error);
      }
    );
  }

  onSubmit() {
    if (this.flightForm.valid) {
      if (this.flightId) {
        this.flightService.updateFlight(this.flightId, this.flightForm.value).subscribe(
          () => {
            this.router.navigate(['/flight-management']);
          },
          error => {
            console.error('Error updating flight:', error);
          }
        );
      } else {
        this.flightService.createFlight(this.flightForm.value).subscribe(
          () => {
            this.router.navigate(['/flight-management']);
          },
          error => {
            console.error('Error creating flight:', error);
          }
        );
      }
    }
  }
}