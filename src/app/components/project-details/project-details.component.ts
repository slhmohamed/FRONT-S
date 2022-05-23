import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  id:any;
  constructor(private route: ActivatedRoute,private projectService:ProjetService ) {}
  project:any
  ngOnInit(): void {
     this.getProject()
    
  }
  getProject(){
    this.id =this.route.snapshot.paramMap.get('id');;
    console.log(this.id);
    this.projectService.getProjetById(this.id).subscribe(res=>{
      this.project=res.data;
      console.log(this.project);
      
    })
  }
  do(statusId:any){
    console.log(this.id +""+statusId);
    this.projectService.updateProjet(this.id,statusId).subscribe(res=>{
      this.getProject()

    })
    

  }
}
