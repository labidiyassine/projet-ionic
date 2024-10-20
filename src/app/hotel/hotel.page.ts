import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage implements OnInit {
  hotels: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadHotels();
  }

  loadHotels() {
    this.dataService.getHotels().subscribe(
      (data: any) => {
        console.log('Fetched Hotels:', data);
        this.hotels = data.documents || [];
      },
      error => {
        console.error('Error fetching hotels:', error);
      }
    );
  }

  reserveHotel(hotelId: string) {
    if (!hotelId) {
      console.error("Hotel ID is undefined");
      return;
    }

    this.dataService.reserveHotel(hotelId).subscribe(
      response => {
        console.log("Hotel reserved successfully", response);
        const hotel = this.hotels.find(h => h.name === hotelId);
        if (hotel) {
          hotel.fields.reserver = { integerValue: 1 }; // Update the local hotel object
        }
      },
      error => {
        console.error("Error reserving hotel:", error);
      }
    );
  }
}
