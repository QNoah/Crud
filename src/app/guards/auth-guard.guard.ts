import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authservice: AuthService) {}

  canActivate(): boolean {
    if (this.authservice.isIngelogd()) {
      return true;
    } else {
      this.router.navigate(['/Login']);
      return false;
    }
  }

}
