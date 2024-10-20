import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CircuitService {
  private apiUrl = 'https://firestore.googleapis.com/v1/projects/ionicproj-6fb8c/databases/(default)/documents/Circuit'; 

  constructor(private http: HttpClient) {}

  // Fetch all circuits
  getAllCircuits(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
  

  // Fetch a circuit by ID
  getCircuitById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Create a new circuit
  createCircuit(circuitData: any): Observable<any> {
    const formattedData = {
      fields: {
        name: { stringValue: circuitData.name },
        description: { stringValue: circuitData.description },
        location: { stringValue: circuitData.location },
        length: { doubleValue: circuitData.length },
        type: { stringValue: circuitData.type },
      },
    };
    return this.http.post(this.apiUrl, formattedData);
  }

  // Update an existing circuit
  updateCircuit(id: string, circuitData: any): Observable<any> {
    const formattedData = {
      fields: {
        name: { stringValue: circuitData.name },
        description: { stringValue: circuitData.description },
        location: { stringValue: circuitData.location },
        length: { doubleValue: circuitData.length },
        type: { stringValue: circuitData.type },
      },
    };
    return this.http.patch(`${this.apiUrl}/${id}`, formattedData);
  }

  // Delete a circuit
  deleteCircuit(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}