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

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getCours(this.id);
  }

    getCours(id: String): void {
      this.coursService.getById(id)
        .subscribe(
          data => {
            this.coursForm = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }

    updateCours(): void {
      this.coursService.updateCours(this.coursForm._id, this.coursForm)
        .subscribe(
          response => {
            console.log(response);
            //this.message = response.message;
            this.router.navigate(['/listecours']);
          },
          error => {
            console.log(error);
          });
    }
 
  }

