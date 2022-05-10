import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  API_URI = 'http://localhost:3003/api/client';
  api = 'http://localhost:3003/api/contact';

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json');

  getClient(): Observable<any> {
    return this.http.get<Client[]>(`${this.API_URI}/find`)
  }

  deleteClient(id: String) {
    return this.http.delete(`${this.api}/deleteClient/${id}`);
  }

  addContact(data:any): Observable<any> {
    return this.http.post(`${this.api}/saveContact`, data)
  }
  listContact(): Observable<any> {
    return this.http.get<Contact[]>(`${this.api}/findAll`)
  }

  deleteContact(id: String) {
    return this.http.delete(`${this.api}/deleteContact/${id}`);
  }

  addClient(data:any): Observable<any> {
    return this.http.post(`${this.API_URI}/saveClient`, data)
  }
}
