import { Component, OnInit } from '@angular/core';
import { Freelancer } from 'src/app/models/freelancer';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-listefreelancers',
  templateUrl: './listefreelancers.component.html',
  styleUrls: ['./listefreelancers.component.scss']
})
export class ListefreelancersComponent implements OnInit {
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
}
