import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Freelancer } from '../models/freelancer';

@Injectable({
  providedIn: 'root'
})
export class FreelancerService {

  constructor(private http: HttpClient) { }
  API_URI = 'http://localhost:3003/api/user';
  getFreelancerByEmail(email:any){
    return this.http.get<any>(`${this.API_URI}/getFreelancerByEmail/`+email);
  }
  deleteUser(id:any){
    return this.http.delete<any>(`${this.API_URI}/delete/`+id);
  }
  getClient(){
    return this.http.get<Freelancer[]>(`${this.API_URI}/getClient`)
  }
  getFreelancers(): Observable<any> {
    return this.http.get<Freelancer[]>(`${this.API_URI}/getFreelancer`)
  }
  addFreelancers(data:any): Observable<any> {
    return this.http.post(`${this.API_URI}/saveFreelancer`, data)
  }

  deleteFreelancer(id: String) {
    return this.http.delete(`${this.API_URI}/deleteFreelancer/${id}`);
  }
}





