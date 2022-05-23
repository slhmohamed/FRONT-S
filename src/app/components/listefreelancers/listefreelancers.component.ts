import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Freelancer } from 'src/app/models/freelancer';
import { FreelancerService } from 'src/app/services/freelancer.service';

@Component({
  selector: 'app-listefreelancers',
  templateUrl: './listefreelancers.component.html',
  styleUrls: ['./listefreelancers.component.scss']
})
export class ListefreelancersComponent implements OnInit {
  freelancers: any=[];
  searchForm: FormGroup;
  constructor(private sc: FreelancerService,private formBuilder: FormBuilder) { }

  p: number = 1;
  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      titre: ['', Validators.required],
    })
    this.listFreelancer()
  }

  listFreelancer() {
    this.sc.getFreelancers().subscribe(
      data => {
        this.freelancers=data.result
        console.log(data);}
     
    )

  }
  
  onSubmit() {
    

    // stop here if form is invalid
    if (this.searchForm.invalid) {
        return;
    }

     this.sc.getFreelancerByEmail(this.searchForm.value.titre).subscribe((res:any)=>{
       this.freelancers=res.data;
       this.searchForm.reset()

     })
}
}
