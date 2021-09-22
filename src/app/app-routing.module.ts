import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './features/candidate/candidate-list/candidate-list.component';
import { CandidateSchoolComponent } from './features/candidate/candidate-school/candidate-school.component';
import { CandidateSignComponent } from './features/candidate/candidate-sign/candidate-sign.component';
import { CvAddComponent } from './features/cv/cv-add/cv-add.component';
import { EmployerListComponent } from './features/employers/employer-list/employer-list.component';
import { EmployerSignComponent } from './features/employers/employer-sign/employer-sign.component';
import { ActivJobAdvertByEmployerComponent } from './features/job-advertisement/activ-job-advert-by-employer/activ-job-advert-by-employer.component';
import { ActiveJobAdvertByDateComponent } from './features/job-advertisement/active-job-advert-by-date/active-job-advert-by-date.component';
import { ActiveJobAdvertListComponent } from './features/job-advertisement/active-job-advert-list/active-job-advert-list.component';
import { CloseJobAdvertisementComponent } from './features/job-advertisement/close-job-advertisement/close-job-advertisement.component';
import { JobAdvertisementAddComponent } from './features/job-advertisement/job-advertisement-add/job-advertisement-add.component';
import { JobPositionAddComponent } from './features/job/job-position-add/job-position-add.component';
import { JobPositionListComponent } from './features/job/job-position-list/job-position-list.component';
import { LoginComponent } from './features/login/login/login.component';

const routes: Routes = [
  // {path:"candidateList",component:CandidateListComponent},
  {path:"candidateAdd",component:CandidateSignComponent},
  {path:"candidateList",component:CandidateListComponent},
  {path:"employerList",component:EmployerListComponent},
  {path:"jobPositionList",component:JobPositionListComponent},
  {path:"employerAdd",component:EmployerSignComponent},
  {path:"login",component:LoginComponent},
  {path:"jobPositionAdd",component:JobPositionAddComponent},
  {path:"jobAdvertisementAdd",component:JobAdvertisementAddComponent},
  {path:"activeJobAdvertList",component:ActiveJobAdvertListComponent},
  {path:"activeJobAdvertListByDate",component:ActiveJobAdvertByDateComponent},
  {path:"activeJobAdvertListByEmployer",component:ActivJobAdvertByEmployerComponent},
  {path:"changeActivite",component:CloseJobAdvertisementComponent},
  {path:"candidateSchool",component:CandidateSchoolComponent},
  {path:"cv",component:CvAddComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
