import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  gebruikersnaam: string = '';
  wachtwoord: string = '';
  onjuist_alert = false;
  nietIngevuld = false;

  constructor(private router: Router, private authservice: AuthService) {}

  login() {
    if (this.gebruikersnaam === '' || this.wachtwoord === '') {
      this.nietIngevuld = true;
      return;
    } else {
      this.authservice
        .login(this.gebruikersnaam, this.wachtwoord)
        .subscribe((success) => {
          if (success) {
            this.router.navigate(['overzicht']); // Navigeer naar het dashboard na het inloggen
          } else {
            this.onjuist_alert = true;
          }
        });
    }
  }
}
