import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Gebruiker } from '../modelen/gebruiker.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private ingelogdSleutel = 'ingelogd';
  private ingelogdSubject: BehaviorSubject<boolean>;

  constructor(private http: HttpClient) {
    const loginStatus = localStorage.getItem(this.ingelogdSleutel) === 'true';
    this.ingelogdSubject = new BehaviorSubject<boolean>(loginStatus);
  }

  isIngelogd(): boolean {
    return this.ingelogdSubject.value;
  }

  getLoggedInStatus(): Observable<boolean> {
    return this.ingelogdSubject.asObservable();
  }

  login(gebruikersnaam: string, wachtwoord: string): Observable<boolean> {
    return this.http.get<Gebruiker[]>(`http://localhost:3000/users?gebruikersnaam=${gebruikersnaam}&wachtwoord=${wachtwoord}`)
      .pipe(
        map(gebruikers => {
          const gebruiker = gebruikers.find(g => g.gebruikersnaam === gebruikersnaam && g.wachtwoord === wachtwoord);
          if (gebruiker) {
            localStorage.setItem(this.ingelogdSleutel, 'true');
            this.ingelogdSubject.next(true);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  loguit(): void {
    localStorage.removeItem(this.ingelogdSleutel);
    this.ingelogdSubject.next(false);
  }
}
