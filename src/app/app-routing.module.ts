import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListeProjectFreeComponent } from './components/liste-project-free/liste-project-free.component';
import { ListecoursComponent } from './components/listecours/listecours.component';
import { ListefreelancersComponent } from './components/listefreelancers/listefreelancers.component';
import { ListeprojetsComponent } from './components/listeprojets/listeprojets.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilclientComponent } from './components/profilclient/profilclient.component';
import { ProfilfreelancerComponent } from './components/profilfreelancer/profilfreelancer.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterfreelancerComponent } from './components/registerfreelancer/registerfreelancer.component';
import { CoursComponent } from './dashboard/cours/cours.component';
import { UpdateCoursComponent } from './dashboard/cours/update-cours/update-cours.component';
import { UserGuard } from './services/user.guard';


const routes: Routes = [
  { path:'',component:AccueilComponent},
  { path: 'navbar', component: NavbarComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  {
    path: 'admin',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path:'about',component:AboutComponent},
  { path:'contact',component:ContactComponent},
  { path:'footer',component:FooterComponent},
  { path:'register',component:RegisterfreelancerComponent},
  { path:'listecours',component:ListecoursComponent,canActivate: [UserGuard] },
  { path:'listefreelancers',component:ListefreelancersComponent,canActivate: [UserGuard]},
  { path:'listeprojets',component:ListeprojetsComponent,canActivate: [UserGuard]},
  { path:'listeprojetsFreelancer',component:ListeProjectFreeComponent,canActivate: [UserGuard]},
  { path:'projectDetails/:id',component:ProjectDetailsComponent,canActivate: [UserGuard]},
  { path:'addProject',component:AddProjectComponent,canActivate: [UserGuard]},

  { path:'profile',component:ProfilfreelancerComponent,canActivate: [UserGuard]},
  { path:'profilclient',component:ProfilclientComponent,canActivate: [UserGuard]},
  { path:'chat',component:ChatComponent,canActivate: [UserGuard]},
  {path: "update/:id", component: UpdateCoursComponent,canActivate: [UserGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }
