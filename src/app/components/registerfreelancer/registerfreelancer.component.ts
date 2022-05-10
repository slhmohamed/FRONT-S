import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-registerfreelancer',
  templateUrl: './registerfreelancer.component.html',
  styleUrls: ['./registerfreelancer.component.scss']
})
export class RegisterfreelancerComponent implements OnInit {

 
  RegisterfreelancerForm!: FormGroup;
  loading = false;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userServ:FreelancerService, public formBuilder: FormBuilder, private router: Router) {
      this.RegisterfreelancerForm= this.formBuilder.group({
        firstName:['', Validators.required],
        lastName:['', Validators.required],
        cin:['', Validators.required],
        tel:['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: ['', Validators.required],
     
      })
    }
      get f() { return this.RegisterfreelancerForm.controls; }  


      ngOnInit(): void {
        
      }
      onSubmit() {
        this.submitted = true;
        if (this.RegisterfreelancerForm.invalid) {
            return;
        }
      
        this.userServ.addFreelancers(this.RegisterfreelancerForm.value)        
        .subscribe(
          res => {  
                   
            this.router.navigate(['/login']);
          },
          err => console.log(err)
        )
    
      }
}



