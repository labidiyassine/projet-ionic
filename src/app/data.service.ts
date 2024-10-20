import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://firestore.googleapis.com/v1/projects/ionicproj-6fb8c/databases/(default)/documents'; 

  constructor(private http: HttpClient) { }

  getHotels(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Hotel`);
  }

  getHotel(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Hotel/${id}`);
  }

  reserveHotel(hotelId: string): Observable<any> {
    const url = `${this.apiUrl}/${hotelId}.json`; 
    return this.http.patch(url, {
      fields: {
        reserver: { integerValue: 1 }
      }
    });
  }

  getFlights(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Flight`);
  }

  getCircuits(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Circuit`);
  }

  getCircuitById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/Circuit/${id}`);
  }
}