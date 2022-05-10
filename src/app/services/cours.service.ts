import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../models/cours';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http: HttpClient) { }

 
  api = 'http://localhost:3003/api/cours';

  headers = new HttpHeaders()
  .set('Content-Type', 'application/json')
  .set('Accept', 'application/json');


  addCours(newCours:any, fileC: File): Observable<any> {
    const fd = new FormData();
    
    fd.append('name', newCours.name); 
    fd.append('file', fileC, fileC.name);
    fd.append('description', newCours.description); 
  
     return this.http.post(`${this.api}/savecours`, fd)
  }

  updateCours(id: any, data: any): Observable<any> {
    
    return this.http.put<any>(`${this.api}/updateCours/${id}`, data);
  }

  getCours(): Observable<any> {
    return this.http.get<Cours[]>(`${this.api}/getAll`)
  }

  getById(id:String): Observable<any> {
    return this.http.get(`${this.api}/getById/${id}`)
  }
  deleteCours(id: String) {
    return this.http.delete(`${this.api}/deleteById/${id}`);
  }
}