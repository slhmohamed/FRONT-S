import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { FreelancerService } from 'src/app/services/freelancer.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  clients: any = [];
  constructor(private toastr:ToastrService,private fc: FreelancerService) { }

  ngOnInit(): void {
    this.listClients()

  }


  listClients() {
    this.fc.getClient().subscribe(
      (data:any) => {
        this.clients = data.result
        console.log(data);
      })

  }
  deleteClients(id: any) {
    this.fc.deleteUser(id).subscribe(
        () => {
          this.toastr.success('Supression avec succes!', 'Notification !');

         this.listClients() 
        }
      );
  }


}
