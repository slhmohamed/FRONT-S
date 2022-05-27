import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  user:any;
  current:any;
  roleUser:any
    constructor(private userService:ClientService) { }
  
    ngOnInit(): void {
      let user=localStorage.getItem('user')
      if(user){
  
      this.user=JSON.parse(user)
  console.log(user);
  
      
      this.userService.getCurrentUser(this.user.user).subscribe((res:any)=>{
        this.current=res.result
        console.log(this.current);
        
      })
      
   
   
        
       
      }
    }
  
  }
  
