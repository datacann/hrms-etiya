import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateListComponent } from './features/candidate/candidate-list/candidate-list.component';
import { CandidateSignComponent } from './features/candidate/candidate-sign/candidate-sign.component';
import { EmployerListComponent } from './features/employers/employer-list/employer-list.component';
import { EmployerSignComponent } from './features/employers/employer-sign/employer-sign.component';
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
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
