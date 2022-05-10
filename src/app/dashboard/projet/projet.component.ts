import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/projet';

import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

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
  deleteProjet(projetClicked: Projet) {
    this.sc.deleteProjet(projetClicked._id)
      .subscribe(
        () => {
          this.projets = this.projets.filter(tL => tL._id != projetClicked._id);
        }
      );
  }
}
