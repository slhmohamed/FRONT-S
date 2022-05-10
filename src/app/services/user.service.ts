import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  API_URI = 'http://localhost:3003/api/user';
    constructor(private http: HttpClient) { }
  
    signup(data:any): Observable<User> {
      return this.http.post<User>(`${this.API_URI}/signup`,data)
    }

    
    login(user: User): Observable<User> {
      return this.http.post<User>(`${this.API_URI}/signin`,user)
      .pipe(map(user => {
             localStorage.setItem('user', JSON.stringify(user));
             return user;
           }));
}
}