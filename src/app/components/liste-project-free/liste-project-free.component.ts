import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-liste-project-free',
  templateUrl: './liste-project-free.component.html',
  styleUrls: ['./liste-project-free.component.scss']
})
export class ListeProjectFreeComponent implements OnInit {
userDeatils:any;
projects:any=[];
searchForm: FormGroup;
  constructor(private projectService:ProjetService,private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      titre: ['', Validators.required],
    })
  this.userDeatils=localStorage.getItem('user');
  console.log(JSON.parse(this.userDeatils).user);
  this.projectService.getProjetsByFreelancer(JSON.parse(this.userDeatils).user).subscribe((res:any)=>{
    this.projects=res.data
  })
    
  }
  goTo(id:any){
    console.log(id);
    
  this.router.navigate(['/projectDetails/'+id])

  }
  
  onSubmit() {
    

    // stop here if form is invalid
    if (this.searchForm.invalid) {
        return;
    }

     this.projectService.getProjetsByTitre(this.searchForm.value.titre).subscribe((res:any)=>{
       this.projects=res.data;
       this.searchForm.reset()

     })
}
 

}
