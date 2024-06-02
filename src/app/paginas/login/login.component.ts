import { Component } from '@angular/core';
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
    const token = 'login';
    localStorage.setItem('token', token);
    this.router.navigate(['']); // Navigeer naar het dashboard na het inloggen
  }
}
