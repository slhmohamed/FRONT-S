import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { ContactadminComponent } from './contactadmin/contactadmin.component';
import { CoursComponent } from './cours/cours.component';
import { ListeCoursComponent } from './cours/liste-cours/liste-cours.component';
import { UpdateCoursComponent } from './cours/update-cours/update-cours.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjetComponent } from './projet/projet.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path: "freelancer", component: FreelancerComponent},
  {path: "navbar", component: NavbarComponent},
  {path: "sidebar", component: SidebarComponent},
  {path: "contactadmin", component: ContactadminComponent},
  {path: "client", component: ClientComponent},
  {path: "listeclient", component: ListClientComponent},
  {path: "projet", component: ProjetComponent},
  {path: "cours", component: CoursComponent},  
  {path: "liste", component: ListeCoursComponent},
  //{path: "update/:id", component: UpdateCoursComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
