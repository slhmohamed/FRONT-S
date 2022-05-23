import { Component, OnInit } from '@angular/core';
import { Projet } from 'src/app/models/projet';

import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']
})
export class ProjetComponent implements OnInit {

  projets: any=[];

  constructor(private sc: ProjetService) { }


  ngOnInit(): void {
    this.listProjet()
  }

  listProjet() {
    this.sc.getProjet().subscribe(
      data => {this.projets=data.data
        console.log(data);}
     
    )

  } 
  delete(id:any){
    this.sc.deleteProjet(id).subscribe(res=>{
      this.listProjet()
    })
  }
}
