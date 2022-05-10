import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-contactadmin',
  templateUrl: './contactadmin.component.html',
  styleUrls: ['./contactadmin.component.scss']
})
export class ContactadminComponent implements OnInit {
contacts: Contact[]=[];
  constructor(private sc: ClientService) { }

  ngOnInit(): void {
    this.listContact();
  }

  listContact() {
    this.sc.listContact().subscribe(
      data => {this.contacts=data
        console.log(data);}
     
    )

  }
  deleteContact(contactClicked: Contact) {
    this.sc.deleteContact(contactClicked._id)
      .subscribe(
        () => {
          this.contacts = this.contacts.filter(tL => tL._id != contactClicked._id);
        }
      );
  }

}
