import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  RegisterForm!: FormGroup;
  loading = false;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userServ: UserService, public formBuilder: FormBuilder, private router: Router,private toastr: ToastrService ) {
      this.RegisterForm= this.formBuilder.group({
        firstName:['', Validators.required],
        lastName:['', Validators.required],
        role:['', Validators.required],
        tel:['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: ['', Validators.required],
     
      })
    }
      get f() { return this.RegisterForm.controls; }  


      ngOnInit(): void {
        
      }
      onSubmit() {
        this.submitted = true;
        if (this.RegisterForm.invalid) {
            return;
        }
      
        this.userServ.signup(this.RegisterForm.value)        
        .subscribe(
          (res:any) => {  
                   
            this.router.navigate(['/']);
            this.toastr.success('Bienvenue a notre plateforme!', 'Notification !');
          },
           err => {
            console.log(err.error.message);
            this.toastr.error(err.error.message, 'Notification!');  
          })
   
    
      }
}

