import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ClientService } from './../../services/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profilfreelancer',
  templateUrl: './profilfreelancer.component.html',
  styleUrls: ['./profilfreelancer.component.scss']
})
export class ProfilfreelancerComponent implements OnInit {
 
current:any;
 id:any;
  constructor(private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id =this.route.snapshot.paramMap.get('id');;
    console.log(this.id);
    this.userService.getFreelancer(this.id).subscribe(res=>{
      this.current=res.result[0];
      console.log(this.current);
      
     
      
    })
     
  }

}
