import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private ingelogd = new BehaviorSubject<boolean>(false);

  get isIngelogd(): Observable<boolean> {
    return this.ingelogd.asObservable();
  }

  get ingelogdWaarde(): boolean {
    return this.ingelogd.value;
  }

  login() {
    // Voeg hier je eigen login-logica toe
    this.ingelogd.next(true);
  }

  loguit() {
    // Voeg hier je eigen logout-logica toe
    this.ingelogd.next(false);
  }
}
