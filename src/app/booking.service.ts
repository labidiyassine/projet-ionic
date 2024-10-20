import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private apiUrl = 'https://firestore.googleapis.com/v1/projects/ionicproj-6fb8c/databases/(default)/documents/Hotel';

  constructor(private http: HttpClient) {}

  getAllHotels(): Observable<any> {
    return this.http.get(`${this.apiUrl}`); 
  }

  getHotelById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`); 
  }

  createHotel(hotelData: any): Observable<any> {
    const formattedData = {
      fields: {
        name: { stringValue: hotelData.name },
        location: { stringValue: hotelData.location },
        price: { doubleValue: hotelData.price },
        description: { stringValue: hotelData.description }
      }
    };
    return this.http.post(this.apiUrl, formattedData);
  }

  updateHotel(id: string, hotelData: any): Observable<any> {
    const formattedData = {
      fields: {
        name: { stringValue: hotelData.name },
        location: { stringValue: hotelData.location },
        price: { doubleValue: hotelData.price },
        description: { stringValue: hotelData.description }
      }
    };
    return this.http.patch(`${this.apiUrl}/${id}`, formattedData);
  }
  deleteHotel(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
