import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 ContactForm!: FormGroup;
  loading = false;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private userServ:ClientService, public formBuilder: FormBuilder, private router: Router) {
      this.ContactForm= this.formBuilder.group({
        name:['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        message:['', Validators.required],
      
     
      })
    }
      get f() { return this.ContactForm.controls; }  


      ngOnInit(): void {
        
      }
      onSubmit() {
        this.submitted = true;
        if (this.ContactForm.invalid) {
            return;
        }
      
        this.userServ.addContact(this.ContactForm.value)        
        .subscribe(
          res => {  
                   
            this.router.navigate(['/contact']);
          },
          err => console.log(err)
        )
    
      }

}
