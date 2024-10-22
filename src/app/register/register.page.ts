import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  public email: string = '';
  public password: string = '';
  public confirmPassword: string = '';
  

  constructor(private authService: AuthService, private router: Router) {}

  async register() {
    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.authService.register(this.email, this.password).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        this.router.navigate(['/login']); 
      },
      (error) => {
        alert(error.error.error.message);
      }
    );
  }
}
