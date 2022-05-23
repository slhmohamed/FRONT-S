import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Projet } from 'src/app/models/projet';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-listeprojets',
  templateUrl: './listeprojets.component.html',
  styleUrls: ['./listeprojets.component.scss']
})
export class ListeprojetsComponent implements OnInit {
  projets: any=[];
  searchForm: FormGroup;
  constructor(private sc: ProjetService,private router:Router,private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      titre: ['', Validators.required],
    })
    this.listProjet()
  }

  listProjet() {
    this.sc.getProjet().subscribe(
      data => {this.projets=data.data
        console.log(data);}
     
    )

  }
  onSubmit() {
    

    // stop here if form is invalid
    if (this.searchForm.invalid) {
        return;
    }

     this.sc.getProjetsByTitre(this.searchForm.value.titre).subscribe((res:any)=>{
       this.projets=res.data;
       this.searchForm.reset()

     })
}
goTo(id:any){
  console.log(id);
  
this.router.navigate(['/projectDetails/'+id])

}
}
