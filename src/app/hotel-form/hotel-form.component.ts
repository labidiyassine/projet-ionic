import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Routes } from '@angular/router'; 
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-hotel-form',
  templateUrl: './hotel-form.component.html',
  styleUrls: ['./hotel-form.component.scss'],
})
export class HotelFormComponent implements OnInit {
  hotelForm: FormGroup;
  hotelId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private bookingService: BookingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.hotelForm = this.fb.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['']
    });
  }

  ngOnInit() {
    this.hotelId = this.route.snapshot.paramMap.get('id');
    if (this.hotelId) {
      console.log(this.hotelId)
      this.loadHotel(this.hotelId);
    }
  }

  loadHotel(id: string) {
    this.bookingService.getHotelById(id).subscribe(
      (data: any) => {
        if (data && data.fields) {
          this.hotelForm.patchValue({
            name: data.fields.name?.stringValue || '',
            location: data.fields.location?.stringValue || '',
            price: data.fields.price?.doubleValue || '',
            description: data.fields.description?.stringValue || ''
          });
        } else {
          console.error('Unexpected data structure:', data);
        }
      },
      error => {
        console.error('Error fetching hotel:', error);
      }
    );
  }

  onSubmit() {
    if (this.hotelForm.valid) {
      if (this.hotelId) {
        this.bookingService.updateHotel(this.hotelId, this.hotelForm.value).subscribe(
          () => {
            this.router.navigate(['/hotel-management']);
          },
          error => {
            console.error('Error updating hotel:', error);
          }
        );
      } else {
        this.bookingService.createHotel(this.hotelForm.value).subscribe(
          () => {
            this.router.navigate(['/hotel-management']);
          },
          error => {
            console.error('Error creating hotel:', error);
          }
        );
      }
    }
  }
}
