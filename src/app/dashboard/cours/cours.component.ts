import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.scss']
})
export class CoursComponent implements OnInit {

  loading = false;
  submitted = false;
  file: any;

   constructor(private sc: CoursService, public formBuilder: FormBuilder, private router: Router) { 
     
   }

   coursForm: Cours = {
    _id: '',     
    file: '',
    name:'',
    description:''
  };


  ngOnInit(): void {
    
  }

  loadFile(file: any) {
    this.file = file.target.files[0];
    console.log(this.file);
  }

  addCourse() {
    this.sc.addCours(this.coursForm, this.file).subscribe(
      (data) => {
        if (data) {
          alert('Cours saved successfully!');
        } else {
          console.log(data);
          alert("error!");
          
        }
      },
      (err) => {
        console.log(err);        
      }
    );
  }


 

}
