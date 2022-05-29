import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from 'src/app/services/projet.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  id:any;
  role: any;
  public percentage='';
  constructor(private toastr:ToastrService,private route: ActivatedRoute,private projectService:ProjetService ) {}
  project:any
  ngOnInit(): void {
    let user=localStorage.getItem('user')
    if(user){
   
   this.role=JSON.parse(user);
 
      
     
  
 }
     this.getProject()
    
  }
  getProject(){
    this.id =this.route.snapshot.paramMap.get('id');;
 
    this.projectService.getProjetById(this.id).subscribe(res=>{
      this.project=res.data;
      console.log(this.project);
      
    })
  }
  do(statusId:any){
    console.log(this.id +""+statusId);
    this.projectService.updateProjet(this.id,statusId).subscribe(res=>{
      this.toastr.success('Tache valide!', 'Notification !');
      this.getProject()

    })
    

  }
  updatePercentage(id:any){
  console.log(this.percentage);
  let resource={
    "phaseId":id,
    "persentage":this.percentage
  }
  
    this.projectService.updatePercentageProjet(this.id,resource).subscribe(res=>{
      this.toastr.success('Percentage modifier!', 'Notification !');

      this.getProject()

    })
    
  }
}
