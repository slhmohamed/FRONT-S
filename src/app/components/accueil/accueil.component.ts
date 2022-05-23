import { Component, OnInit } from '@angular/core';
import { ProjetService } from './../../services/projet.service';
import { CoursService } from './../../services/cours.service';
import { UserService } from './../../services/user.service';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
projet:any=[]
user:any=[];
cours:any=[]
freelancer:any=[]
countP:any;
countU:any;
countF:any;
countC:any;
  constructor(private projetService:ProjetService,
    private coursService:CoursService,
    private userService:FreelancerService
    ) { }

  ngOnInit(): void {
    this.projetService.getProjet().subscribe(res=>{
this.projet=res.data
this.countP=this.projet.length
    })
    this.coursService.getCours().subscribe(res=>{ 
      this.cours=res
      this.countC=this.cours.length
     })
this.userService.getClient().subscribe((res:any)=>{
  this.user=res.result
  this.countU=this.user.length
})
this.userService.getFreelancers().subscribe(res=>{
  this.freelancer=res.result
  this.countF=this.freelancer.length
})
     
  }

}
