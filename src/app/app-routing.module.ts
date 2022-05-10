import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { ChatComponent } from './components/chat/chat.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListecoursComponent } from './components/listecours/listecours.component';
import { ListefreelancersComponent } from './components/listefreelancers/listefreelancers.component';
import { ListeprojetsComponent } from './components/listeprojets/listeprojets.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilclientComponent } from './components/profilclient/profilclient.component';
import { ProfilfreelancerComponent } from './components/profilfreelancer/profilfreelancer.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterfreelancerComponent } from './components/registerfreelancer/registerfreelancer.component';
import { CoursComponent } from './dashboard/cours/cours.component';
import { UpdateCoursComponent } from './dashboard/cours/update-cours/update-cours.component';


const routes: Routes = [
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
  { path:'registerfreelancer',component:RegisterfreelancerComponent},
  { path:'listecours',component:ListecoursComponent},
  { path:'listefreelancers',component:ListefreelancersComponent},
  { path:'listeprojets',component:ListeprojetsComponent},
  { path:'profilfreelancer',component:ProfilfreelancerComponent},
  { path:'profilclient',component:ProfilclientComponent},
  { path:'chat',component:ChatComponent},
  {path: "update/:id", component: UpdateCoursComponent},
  { path:'',component:AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
