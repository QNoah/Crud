import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Data } from 'src/app/modelen/data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  laadData(): Observable<Data> {
    return this.http.get<Data>(`${this.baseUrl}/data`);
  }
  verwijderOpId(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/data/${id}`);
  }

  laadDataOpId(id: number) {
    return this.http.get<Data>(`${this.baseUrl}/data/${id}`);
  }
  postData(data: Data): Observable<Data> {
    const body = JSON.stringify(data);
    console.log(body);
    return this.http
      .post<Data>(`${this.baseUrl}/data`, body, {
        headers: this.getHeaders(),
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(new Data());
        })
      );
  }
  updateData(Id: number, data: Data): Observable<Data> {
    const body = JSON.stringify(data);
    return this.http
      .put<Data>(`${this.baseUrl}/data/${Id}`, body, {
        headers: this.getHeaders(),
      })
      .pipe(
        catchError((err) => {
          console.log(err);
          return of(new Data());
        })
      );
  }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json');
  }
}
