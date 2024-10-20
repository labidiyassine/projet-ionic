import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-hotel-management',
  templateUrl: './hotel-management.page.html',
  styleUrls: ['./hotel-management.page.scss'],
})
export class HotelManagementPage implements OnInit {
  hotels: any[] = [];

  constructor(private bookingService: BookingService, private router: Router) {}

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels() {
    this.bookingService.getAllHotels().subscribe(
      (data: any) => {
        console.log('Fetched Hotels:', data);
        this.hotels = data.documents; // Adjust based on your response structure
        console.log('Hotels:', this.hotels); // Log the hotels for verification
      },
      error => {
        console.error('Error fetching hotels:', error);
      }
    );
  }

  editHotel(hotel: any) {
    const hotelId = hotel.name.split('/').pop(); // Extract the document ID from the name
    if (hotelId) {
      this.router.navigate(['/hotel-form', hotelId]);
    } else {
      console.error('Hotel ID is undefined');
    }
  }

  deleteHotel(hotel: any) {
    const hotelId = hotel.name.split('/').pop(); // Extract the document ID from the name
    if (hotelId) {
      this.bookingService.deleteHotel(hotelId).subscribe(
        () => {
          console.log(`Hotel with ID ${hotelId} deleted successfully.`);
          this.loadHotels(); // Refresh the list after deletion
        },
        error => {
          console.error('Error deleting hotel:', error);
        }
      );
    } else {
      console.error('Hotel ID is undefined');
    }
  }
}