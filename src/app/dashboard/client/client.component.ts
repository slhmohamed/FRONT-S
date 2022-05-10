import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

 clientForm!: FormGroup;
 loading = false;
 submitted = false;
  constructor(private sc: ClientService, public formBuilder: FormBuilder, private router: Router) { 
    this.clientForm = this.formBuilder.group({
      firstName: ['', Validators.required], 
      lastName: ['', Validators.required],
      cin: ['', Validators.required],
      tel: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  get f() { return this.clientForm.controls; }  


      ngOnInit(): void {
        
      }
      onSubmit() {
        this.submitted = true;
        if (this.clientForm.invalid) {
            return;
        }
      
        this.sc.addClient(this.clientForm.value)        
        .subscribe(
          res => {  
                   
            this.router.navigate(['/listefreelancers']);
          },
          err => console.log(err)
        )
    
      }



}
