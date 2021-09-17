import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateSignComponent } from './features/candidate/candidate-sign/candidate-sign.component';
import { EmployerSignComponent } from './features/employers/employer-sign/employer-sign.component';
import { JobPositionAddComponent } from './features/job/job-position-add/job-position-add.component';
import { LoginComponent } from './features/login/login/login.component';

const routes: Routes = [
  // {path:"candidateList",component:CandidateListComponent},
  {path:"candidateAdd",component:CandidateSignComponent},
  {path:"employerAdd",component:EmployerSignComponent},
  {path:"login",component:LoginComponent},
  {path:"jobPositionAdd",component:JobPositionAddComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
