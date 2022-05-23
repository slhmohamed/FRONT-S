import { Component, OnInit } from '@angular/core';
import { Freelancer } from 'src/app/models/freelancer';
import { FreelancerService } from 'src/app/services/freelancer.service';


@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss']
})
export class FreelancerComponent implements OnInit {
  freelancers: Freelancer[]=[];
  constructor(private sc: FreelancerService) { }


  ngOnInit(): void {
    this.listFreelancer()
  }

  listFreelancer() {
    this.sc.getFreelancers().subscribe(
      data => {this.freelancers=data.result
        console.log(data);}
     
    )

  }
  deleteFreelancer(id: any) {
    this.sc.deleteUser(id)
      .subscribe(
        () => {
           this.listFreelancer()
        }
      );
  }






}
