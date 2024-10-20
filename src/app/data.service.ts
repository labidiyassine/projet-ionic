import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://firestore.googleapis.com/v1/projects/ionicproj-6fb8c/databases/(default)/documents'; 


  constructor(private http : HttpClient) { }


  // List of Hotels CRUD

  // getHotels(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/hotels`);
  // }
  getHotels(): Observable<any> {
    return this.http.get(`${this.apiUrl}/Hotel`); 
  }
  getHotel(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  reserveHotel(hotelId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/Hotel/${hotelId}/reserve`);
  }
 
  // List of FLIGHT CRUD


  getFlights(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Flight`);
  }

  getFlight(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }




    // List of Circuit CRUD

  getCircuits(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/Circuit`);
  }

  getCircuit(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

 
}
