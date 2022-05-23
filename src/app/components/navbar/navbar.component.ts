import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  role:String=''
  isHere:Boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    let user=localStorage.getItem('user')
     if(user){
      this.isHere=true
    this.role=JSON.parse(user).role;
      console.log(this.role);
       
      
    }else{
      this.isHere=false
     
    }
  }
  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }

}
