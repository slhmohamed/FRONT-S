import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { ProjetService } from './../../services/projet.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
freelancer:any=[]
public projetForm: FormGroup;
  constructor(
    private toastr: ToastrService,
    private fs:FreelancerService,
    public formBuilder: FormBuilder,
    private projectService:ProjetService) { }

  ngOnInit(): void {
    this.projetForm = this.formBuilder.group({
     
      'date_debut': "",
      'date_fin': "",
      'titre': "",
      'description': "",
      'frelancer': "",
       'phase':  this.formBuilder.array([]),
 
    });
    this.fs.getFreelancers().subscribe(res=>{
      this.freelancer=res.result
    })
  }
  onSubmit(){
    const submitData = this.projetForm.getRawValue();
    console.log(submitData);
    
     this.projectService.addProjectc(submitData).subscribe(res=>{
      this.toastr.success('Créé avec succès ', 'Notification!');


     })
    
    
  }
  addPhaseItem() {
    let items = this.projetForm.get('phase') as FormArray;
    console.log(items);
    
    items.push(this.formBuilder.group({ phase: '',do:false }));
  }
  getPhaseControls() {
    return (this.projetForm.get('phase') as FormArray).controls;
  }
  deletePhaseItem(item:any) {
    if (this.getPhaseControls().length > 1)
      this.getPhaseControls().splice(item, 1)
  }
  p_trackByFn(index:any, item:any) {
    return index;
  }
}
