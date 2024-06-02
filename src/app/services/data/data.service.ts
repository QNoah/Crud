import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from 'src/app/modelen/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService{
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  
  laadData():Observable<Data>{
    return this.http.get<Data>(`${this.baseUrl}/data`);
  }
  verwijderOpId(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/data/${id}`);
  }

  laadDataOpId(id: number){
    return this.http.get<Data>(`${this.baseUrl}/data/${id}`);
  }
}
