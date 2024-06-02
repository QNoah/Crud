import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private ingelogdSleutel = 'ingelogd';
  private loggedInSubject: BehaviorSubject<boolean>;

  constructor() {
    const loginStatus = localStorage.getItem(this.ingelogdSleutel) === 'true';
    this.loggedInSubject = new BehaviorSubject<boolean>(loginStatus);
  }

  isIngelogd(): boolean {
    return this.loggedInSubject.value;
  }

  getLoggedInStatus() {
    return this.loggedInSubject.asObservable();
  }

  login(): void {
    localStorage.setItem(this.ingelogdSleutel, 'true');
    this.loggedInSubject.next(true);
  }

  loguit(): void {
    localStorage.removeItem(this.ingelogdSleutel);
    this.loggedInSubject.next(false);
  }
}
