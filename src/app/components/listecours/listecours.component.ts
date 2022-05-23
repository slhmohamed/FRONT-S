import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cours } from 'src/app/models/cours';
import { CoursService } from 'src/app/services/cours.service';

@Component({
  selector: 'app-listecours',
  templateUrl: './listecours.component.html',
  styleUrls: ['./listecours.component.scss']
})
export class ListecoursComponent implements OnInit {

  cours : Cours[]=[];
  searchForm: FormGroup;
  constructor(private courservice:CoursService,private formBuilder: FormBuilder) {
  
   }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      titre: ['', Validators.required],
    })
    this.listeCours()
  }

  listeCours(){
    this.courservice.getCours().subscribe(res => {
      this.cours = res;
    })
  }
  donlowd(file:any){
    console.log("file");
    window.open('http://localhost:3003/'+file, '_blank');
  }
  
  
  onSubmit() {
    

    // stop here if form is invalid
    if (this.searchForm.invalid) {
        return;
    }

     this.courservice.getCoursByTitre(this.searchForm.value.titre).subscribe((res:any)=>{
       this.cours=res.data;
       this.searchForm.reset()

     })
}

}
