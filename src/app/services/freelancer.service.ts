import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Freelancer } from '../models/freelancer';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private http: HttpClient) { }
  API_URI = 'http://localhost:3003/api/freelancer';

  getFreelancers(): Observable<any> {
    return this.http.get<Freelancer[]>(`${this.API_URI}/findAll`)
  }
  addFreelancers(data:any): Observable<any> {
    return this.http.post(`${this.API_URI}/saveFreelancer`, data)
  }

  deleteFreelancer(id: String) {
    return this.http.delete(`${this.API_URI}/deleteFreelancer/${id}`);
  }
}





