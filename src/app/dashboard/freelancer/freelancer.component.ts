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
  }

  listFreelancer() {
    this.sc.getFreelancers().subscribe(
      data => {this.freelancers=data
        console.log(data);}
     
    )

  }
  deleteFreelancer(freelancerClicked: Freelancer) {
    this.sc.deleteFreelancer(freelancerClicked._id)
      .subscribe(
        () => {
          this.freelancers = this.freelancers.filter(tL => tL._id != freelancerClicked._id);
        }
      );
  }






}
