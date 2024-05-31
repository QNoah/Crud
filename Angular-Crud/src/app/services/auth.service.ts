import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private ingelogd = new BehaviorSubject<boolean>(false);

  get isIngelogd() {
    return this.ingelogd.asObservable();
  }

  login() {
    // Hier voeg je je login-logica toe
    this.ingelogd.next(true);
  }

  loguit() {
    // Hier voeg je je logout-logica toe
    this.ingelogd.next(false);
  }
}
