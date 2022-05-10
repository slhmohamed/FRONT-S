import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/projet';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-listeprojets',
  templateUrl: './listeprojets.component.html',
  styleUrls: ['./listeprojets.component.scss']
})
export class ListeprojetsComponent implements OnInit {
  projets: Projet[]=[];

  constructor(private sc: ProjetService) { }


  ngOnInit(): void {
  }

  listProjet() {
    this.sc.getProjet().subscribe(
      data => {this.projets=data
        console.log(data);}
     
    )

  }

  
}
