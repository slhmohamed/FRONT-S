import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-listecours',
  templateUrl: './listecours.component.html',
  styleUrls: ['./listecours.component.scss']
})
export class ListecoursComponent implements OnInit {

  cours : Cours[]=[]
  constructor(private courservice:CoursService) {
  
   }

  ngOnInit(): void {
    this.listeCours()
  }

  listeCours(){
    this.courservice.getCours().subscribe(res => {

      this.cours = res;
    })
  }

}
