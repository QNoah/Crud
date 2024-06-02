import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private authservice: AuthService){}

  login() {
    // Hier voeg je je eigen login-validatie toe
    // Voor nu, laten we aannemen dat de inloggegevens correct zijn en een token teruggeven
    this.authservice.login();
    this.router.navigate(['overzicht']); // Navigeer naar het dashboard na het inloggen
  }
}
