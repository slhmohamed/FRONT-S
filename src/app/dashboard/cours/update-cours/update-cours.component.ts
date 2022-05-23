import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-update-cours',
  templateUrl: './update-cours.component.html',
  styleUrls: ['./update-cours.component.scss']
})
export class UpdateCoursComponent implements OnInit {
  
  constructor(private coursService: CoursService, private route: ActivatedRoute, private router: Router) { }
  id: any;
  coursForm: Cours = {
      _id: '',
      name: '',
      file:'',
      description: '',
    
    };
    file: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCours(this.id);
  }

    getCours(id: String): void {
      this.coursService.getById(id)
        .subscribe(
          data => {
            this.coursForm = data;
            console.log(this.coursForm);
            
          },
          error => {
            console.log(error);
          });
    }
    loadFile(file: any) {
      this.file = file.target.files[0];
      console.log(this.file);
    }
    updateCours(): void {
      console.log(this.coursForm);
 if(this.file != null){
   this.file=this.file
 }else{
   this.file=this.coursForm
 }
 console.log(this.file);
 
      this.coursService.updateCours(this.id, this.coursForm,this.file)
        .subscribe(
          response => {
            console.log(response);
            //this.message = response.message;
            this.router.navigate(['/admin/liste']);
          },
          error => {
            console.log(error);
          });
    }
 
  }

