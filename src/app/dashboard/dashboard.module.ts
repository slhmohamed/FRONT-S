import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContactadminComponent } from './contactadmin/contactadmin.component';
import { ProjetComponent } from './projet/projet.component';
import { ClientComponent } from './client/client.component';
import { CoursComponent } from './cours/cours.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCoursComponent } from './cours/update-cours/update-cours.component';
import { ListeCoursComponent } from './cours/liste-cours/liste-cours.component';
import { ToastrModule } from 'ngx-toastr';
import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    FreelancerComponent,
    NavbarComponent,
    SidebarComponent,
    ContactadminComponent,
    ProjetComponent,
    ClientComponent,
    CoursComponent,
    ListClientComponent,
    UpdateCoursComponent,
    ListeCoursComponent,
    HeaderNavComponent,
    ProfilComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(), // ToastrModule added

  ]
})
export class DashboardModule { }
