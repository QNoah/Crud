import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router){}

  login() {
    // Hier voeg je je eigen login-validatie toe
    // Voor nu, laten we aannemen dat de inloggegevens correct zijn en een token teruggeven
    const token = 'example_token';
    localStorage.setItem('token', token);
    this.router.navigate(['/overzicht']); // Navigeer naar het dashboard na het inloggen
  }
}
