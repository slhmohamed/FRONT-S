import { Component, OnInit } from '@angular/core';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.scss']
})
export class ListeCoursComponent implements OnInit {
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
  deleteCours(coursClicked: Cours) {
    this.courservice.deleteCours(coursClicked._id)
      .subscribe(
        () => {
          this.cours = this.cours.filter(tL => tL._id != coursClicked._id);
        }
      );
  }
}


