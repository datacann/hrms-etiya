import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidateSignComponent } from './features/candidate/candidate-sign/candidate-sign.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NaviComponent } from './features/navi/navi.component';
import { EmployerSignComponent } from './features/employers/employer-sign/employer-sign.component';
import { LoginComponent } from './features/login/login/login.component';
import { JobPositionAddComponent } from './features/job/job-position-add/job-position-add.component';
import { EmployerListComponent } from './features/employers/employer-list/employer-list.component';
import { JobPositionListComponent } from './features/job/job-position-list/job-position-list.component';
import { JobAdvertisementAddComponent } from './features/job-advertisement/job-advertisement-add/job-advertisement-add.component';
import { CandidateListComponent } from './features/candidate/candidate-list/candidate-list.component';
import { ActiveJobAdvertListComponent } from './features/job-advertisement/active-job-advert-list/active-job-advert-list.component';
import { ActiveJobAdvertByDateComponent } from './features/job-advertisement/active-job-advert-by-date/active-job-advert-by-date.component';
import { ActivJobAdvertByEmployerComponent } from './features/job-advertisement/activ-job-advert-by-employer/activ-job-advert-by-employer.component';
import { CloseJobAdvertisementComponent } from './features/job-advertisement/close-job-advertisement/close-job-advertisement.component';



@NgModule({
  declarations: [
    AppComponent,
    CandidateSignComponent,
    CandidateListComponent,
    NaviComponent,
    EmployerSignComponent,
    LoginComponent,
    JobPositionAddComponent,
    EmployerListComponent,
    JobPositionListComponent,
    JobAdvertisementAddComponent,
    ActiveJobAdvertListComponent,
    ActiveJobAdvertByDateComponent,
    ActivJobAdvertByEmployerComponent,
    CloseJobAdvertisementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
