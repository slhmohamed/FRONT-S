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
    return this.http.get<Projet[]>(`${this.API_URI}/getProjets`)
  }
  getProjetById(id:any): Observable<any> {
    return this.http.get<Projet[]>(`${this.API_URI}/getProjetById/`+id)
  }
   deleteProjet(id: String) {
    return this.http.delete(`${this.API_URI}/deleteProjet/${id}`);
  }

  addProjectc(resource:any){
    return this.http.post(`${this.API_URI}/saveCours`,resource);
  }
  getProjetsByFreelancer(id:any){
    return this.http.get<Projet[]>(`${this.API_URI}/getProjetsByFreelancer/`+id)
  }
  getProjetsByTitre(titre:any){
    return this.http.get<Projet[]>(`${this.API_URI}/getProjetsByTitre/`+titre)
  }
  updateProjet(projectId:any,phaseId:any){
    return this.http.put<void>(`${this.API_URI}/updateProjet/`+projectId+"/"+phaseId,phaseId);
  }
  updatePercentageProjet(project:any,resource:any){
    return this.http.put<void>(`${this.API_URI}/updatePercentageProjet/`+project,resource);
  }
}
