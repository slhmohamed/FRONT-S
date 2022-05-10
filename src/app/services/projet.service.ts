import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projet } from '../models/projet';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  constructor(private http: HttpClient) { }
  API_URI = 'http://localhost:3003/api/projet';

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json');

  getProjet(): Observable<any> {
    return this.http.get<Projet[]>(`${this.API_URI}/find`)
  }
   deleteProjet(id: String) {
    return this.http.delete(`${this.API_URI}/findOneAndDelete/${id}`);
  }
}
