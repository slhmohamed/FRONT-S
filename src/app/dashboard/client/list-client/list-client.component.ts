import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {

  clients: Client[] = [];
  constructor(private sc: ClientService) { }

  ngOnInit(): void {
  }


  listClients() {
    this.sc.getClient().subscribe(
      data => {
        this.clients = data
        console.log(data);
      }

    )

  }
  deleteClients(ClientsClicked: Client) {
    this.sc.deleteClient(ClientsClicked._id)
      .subscribe(
        () => {
          this.clients = this.clients.filter(tL => tL._id != ClientsClicked._id);
        }
      );
  }


}
