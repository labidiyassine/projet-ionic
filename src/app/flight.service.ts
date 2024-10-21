import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  private apiUrl = 'https://firestore.googleapis.com/v1/projects/ionicproj-6fb8c/databases/(default)/documents/Flight'; 

  constructor(private http: HttpClient) {}

  // Fetch all flights
  getAllFlights(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Fetch a flight by ID
  getFlightById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Create a new flight
  createFlight(flightData: any): Observable<any> {
    const formattedData = {
      fields: {
        flightNumber: { stringValue: flightData.flightNumber || '' },
        departure: { stringValue: flightData.departure || '' },
        arrival: { stringValue: flightData.arrival || '' },
        price: { doubleValue: flightData.price || 0 },
        imageUrl: { stringValue: flightData.imageUrl || '' }, // Add image URL here
        description: { stringValue: flightData.description || '' } // Assuming description is required
      },
    };
    return this.http.post(this.apiUrl, formattedData);
  }

  // Update an existing flight
  updateFlight(id: string, flightData: any): Observable<any> {
    const formattedData = {
      fields: {
        flightNumber: { stringValue: flightData.flightNumber },
        departure: { stringValue: flightData.departure },
        arrival: { stringValue: flightData.arrival },
        price: { doubleValue: flightData.price },
      },
    };
    return this.http.patch(`${this.apiUrl}/${id}`, formattedData);
  }

  // Delete a flight
  deleteFlight(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}