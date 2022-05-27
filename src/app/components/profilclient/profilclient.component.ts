import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profilclient',
  templateUrl: './profilclient.component.html',
  styleUrls: ['./profilclient.component.scss']
})
export class ProfilclientComponent implements OnInit {
  user:any;
  current:any;
  roleUser:any
  UpdateForm!: FormGroup;
  projetForm!:FormGroup;
  loading = false;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
 
    constructor(public formBuilder: FormBuilder,private userService:ClientService,private _userService:UserService) { }
  
    ngOnInit(): void {
      this.projetForm = this.formBuilder.group({
 
         'projets':  this.formBuilder.array([]),
   
      });
      this.getSingle()
      this.UpdateForm= this.formBuilder.group({
        firstName:['', Validators.required],
        lastName:['', Validators.required],
         tel:['', Validators.required],
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: [''],
     
      })
 
  
    }
    
  onSubmitProjet(){
    const submitData = this.projetForm.getRawValue();
    console.log(submitData);
    
     this.userService.addProject(this.user.user,submitData).subscribe(res=>{
       
window.location.reload()

     })
    
    
  }
  addPhaseItem() {
    let items = this.projetForm.get('projets') as FormArray;
  
    items.push(this.formBuilder.group({ titre: '',description:'' }));
  }
  getPhaseControls() {
    return (this.projetForm.get('projets') as FormArray).controls;
  }
  deletePhaseItem(item:any) {
    if (this.getPhaseControls().length > 1)
      this.getPhaseControls().splice(item, 1)
  }
  p_trackByFn(index:any, item:any) {
    return index;
  }
    getSingle(){
      let user=localStorage.getItem('user')
      if(user){
  
      this.user=JSON.parse(user)
  console.log(user);
  
      
      this.userService.getCurrentUser(this.user.user).subscribe((res:any)=>{
        this.current=res.result
        console.log(this.current);
        
        this.UpdateForm.patchValue({'firstName': this.current.firstName,
      
        'lastName': this.current.lastName,
        'tel': this.current.tel,
        'email': this.current.email
      });
        
        
      })
      
   
   
        
       
      }
    }
  
    onSubmit() {
      this.submitted = true;
      if (this.UpdateForm.invalid) {
          return;
      }
    this._userService.updateUser(this.user.user,this.UpdateForm.value).subscribe(res=>{
this.getSingle()
    })
    
   
    }
    desactive(){

    }
  }
  