import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterfreelancerComponent } from './components/registerfreelancer/registerfreelancer.component';
import { ListecoursComponent } from './components/listecours/listecours.component';
import { ListeprojetsComponent } from './components/listeprojets/listeprojets.component';
import { ListefreelancersComponent } from './components/listefreelancers/listefreelancers.component';
import { ProfilfreelancerComponent } from './components/profilfreelancer/profilfreelancer.component';
import { ProfilclientComponent } from './components/profilclient/profilclient.component';
import { ChatComponent } from './components/chat/chat.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ListeProjectFreeComponent } from './components/liste-project-free/liste-project-free.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { ToastrModule } from 'ngx-toastr';
import { UsernnameComponent } from './components/usernname/usernname.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AccueilComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    RegisterfreelancerComponent,
    ListecoursComponent,
    ListeprojetsComponent,
    ListefreelancersComponent,
    ProfilfreelancerComponent,
    ProfilclientComponent,
    ChatComponent,
    AddProjectComponent,
    ListeProjectFreeComponent,
    ProjectDetailsComponent,
    UsernnameComponent,
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    ToastrModule.forRoot(), // ToastrModule added

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
