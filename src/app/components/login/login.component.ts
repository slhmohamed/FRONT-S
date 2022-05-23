import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userServ: UserService, public formBuilder: FormBuilder, private router: Router,private toastr: ToastrService) {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: ['', Validators.required],
     
      })
    }
      get f() { return this.loginForm.controls; }  


      ngOnInit(): void {
        
      }
      onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
      
        this.userServ.login(this.loginForm.value)        
        .subscribe(
          data => {          
            if(data == null) {
              
              
            }else {
       
              if(data.role == 'Client') {
                this.router.navigate(['/listeprojets']);
              } 
      
              if( data.role == 'Admin') {
                this.router.navigate(['/admin/contactadmin']);
              }
              if( data.role == 'Freelancer') {
                this.router.navigate(['/listeprojetsFreelancer']);
              }
            }
          }, err => {
            this.toastr.error(err.error.message, 'Notification!');  
           })
    
      }

     
}
