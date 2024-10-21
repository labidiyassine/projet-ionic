import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.page.html',
  styleUrls: ['./hotel.page.scss'],
})
export class HotelPage implements OnInit {
hotels:any[] = [{"name" : "hamza", "description":"blabla"}];
newHotel: any = {};
hotel: any;

  constructor(private dataService:DataService) { }

  ngOnInit() {

    this.loadHotels();
      console.log(this.hotels);
  }

  // loadHotels() {
  //   this.dataService.getHotels().subscribe((data) => {
  //     this.hotels = data;
  //     console.log(this.hotels);

  //   });
  // }
  loadHotels() {
    this.dataService.getHotels().subscribe(
      (data: any) => {
        console.log('Fetched Flights:', data);
        this.hotels = data.documents || [];
        console.log('Flights:', this.hotels);
      },
      error => {
        console.error('Error fetching flights:', error);
      }
    );
  }

 
  reserveHotel(hotelId: any) {
    if (!hotelId) {
      console.error("Hotel ID is undefined");
      return;
    }
  
    this.dataService.reserveHotel(hotelId)
      .subscribe(
        response => {
          console.log("Hotel reserved successfully", response);
        },
        error => {
          console.error("Error reserving hotel:", error);
        }
      );
  }
  
}
