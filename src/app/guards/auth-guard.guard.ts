import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (this.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  isLoggedIn(): boolean {
    // Hier voeg je je eigen logica toe om te controleren of de gebruiker is ingelogd
    // Voor nu, laten we zeggen dat de gebruiker is ingelogd als er een token in de lokale opslag is
    return !!localStorage.getItem('token');
  }
}
