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
  selectedImage: File | null = null;
  imageError: string | null = null;

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

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        this.imageError = 'Only images are allowed (JPEG, PNG, GIF).';
        this.selectedImage = null;
      } else {
        this.imageError = null;
        this.selectedImage = file;
      }
    }
  }

  onSubmit() {
    if (this.flightForm.valid) {
      const formData = new FormData();
      for (const key in this.flightForm.controls) {
        if (this.flightForm.controls.hasOwnProperty(key)) {
          formData.append(key, this.flightForm.controls[key].value);
        }
      }
      if (this.selectedImage) {
        formData.append('image', this.selectedImage, this.selectedImage.name);
      }

      if (this.flightId) {
        this.flightService.updateFlight(this.flightId, formData).subscribe(
          () => {
            this.router.navigate(['/flight-management']);
          },
          error => {
            console.error('Error updating flight:', error);
          }
        );
      } else {
        this.flightService.createFlight(formData).subscribe(
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
