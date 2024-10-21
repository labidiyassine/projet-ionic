import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.page.html',
  styleUrls: ['./hotel-details.page.scss'],
})
export class HotelDetailsPage implements OnInit {


  hotel: any | undefined;


  constructor(private route:ActivatedRoute,private dataService:DataService, private router:Router) { }

  ngOnInit() {


    const hotelId = this.route.snapshot.paramMap.get('id');
    if (hotelId) {
      this.dataService.getHotelById(hotelId).subscribe((data) => {
        this.hotel = data;
      });
    }
  }

  goToHotelDetails(hotelId: string) {
    this.router.navigate(['/hotel-details', hotelId]);
  }
  }


