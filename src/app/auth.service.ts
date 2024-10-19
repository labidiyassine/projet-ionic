import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiKey = 'AIzaSyAYbjztwvvdZzoFCjhnVcReA_iHiaNJxEw'; 
  private registerUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`;
  private loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`;

  constructor(private http: HttpClient) {}

  register(email: string, password: string): Observable<any> {
    const payload = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    return this.http.post(this.registerUrl, payload, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  login(email: string, password: string): Observable<any> {
    const payload = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    return this.http.post(this.loginUrl, payload, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
}
