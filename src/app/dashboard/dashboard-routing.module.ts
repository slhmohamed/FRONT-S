import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from '../services/user.guard';
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
  {path: "freelancer", component: FreelancerComponent,canActivate: [UserGuard]},
  {path: "navbar", component: NavbarComponent,canActivate: [UserGuard]},
  {path: "sidebar", component: SidebarComponent,canActivate: [UserGuard]},
  {path: "contactadmin", component: ContactadminComponent,canActivate: [UserGuard]},
  {path: "client", component: ClientComponent,canActivate: [UserGuard]},
  {path: "listeclient", component: ListClientComponent,canActivate: [UserGuard]},
  {path: "projet", component: ProjetComponent,canActivate: [UserGuard]},
  {path: "cours", component: CoursComponent,canActivate: [UserGuard]},  
  {path: "liste", component: ListeCoursComponent,canActivate: [UserGuard]},
  {path:"update-cours/:id",component:UpdateCoursComponent,canActivate: [UserGuard]}
  //{path: "update/:id", component: UpdateCoursComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
