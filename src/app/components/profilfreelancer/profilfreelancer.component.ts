import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ClientService } from './../../services/client.service';

@Component({
  selector: 'app-profilfreelancer',
  templateUrl: './profilfreelancer.component.html',
  styleUrls: ['./profilfreelancer.component.scss']
})
export class ProfilfreelancerComponent implements OnInit {
user:any;
current:any;
  constructor(private userService:ClientService) { }

  ngOnInit(): void {
    let user=localStorage.getItem('user')
    if(user){
    this.user=JSON.parse(user)
    console.log(this.user);
    
    this.userService.getCurrentUser(this.user.user).subscribe((res:any)=>{
      this.current=res.result
      console.log(this.current);
      
    })
    
 
 
      
     
    }
  }

}
