import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateImageComponent } from './features/candidate/candidate-image/candidate-image.component';
import { CandidateListComponent } from './features/candidate/candidate-list/candidate-list.component';
import { CandidateSchoolComponent } from './features/candidate/candidate-school/candidate-school.component';
import { CandidateSignComponent } from './features/candidate/candidate-sign/candidate-sign.component';
import { CvAddComponent } from './features/cv/cv-add/cv-add.component';
import { CvDetailComponent } from './features/cv/cv-detail/cv-detail.component';
import { EmployerListComponent } from './features/employers/employer-list/employer-list.component';
import { EmployerSignComponent } from './features/employers/employer-sign/employer-sign.component';
import { ActivJobAdvertByEmployerComponent } from './features/job-advertisement/activ-job-advert-by-employer/activ-job-advert-by-employer.component';
import { ActiveJobAdvertByDateComponent } from './features/job-advertisement/active-job-advert-by-date/active-job-advert-by-date.component';
import { ActiveJobAdvertListComponent } from './features/job-advertisement/active-job-advert-list/active-job-advert-list.component';
import { CloseJobAdvertisementComponent } from './features/job-advertisement/close-job-advertisement/close-job-advertisement.component';
import { JobAdvertisementAddComponent } from './features/job-advertisement/job-advertisement-add/job-advertisement-add.component';
import { VerificateJobAdvertComponent } from './features/job-advertisement/verificate-job-advert/verificate-job-advert.component';
import { JobPositionAddComponent } from './features/job/job-position-add/job-position-add.component';
import { JobPositionListComponent } from './features/job/job-position-list/job-position-list.component';
import { LoginComponent } from './features/login/login/login.component';
import { CandidateListGuard } from './guards/candidate-list/candidate-list.guard';
import { ChangeActivityJobAdvertGuard } from './guards/change-activity-job-advert/change-activity-job-advert.guard';
import { JobAdversitementAddGuard } from './guards/job-advertisement-add/job-adversitement-add.guard';
import { JobPositionAddGuard } from './guards/job-position-add/job-position-add.guard';
import { CvService } from './services/cv.service';

const routes: Routes = [
  // {path:"candidateList",component:CandidateListComponent},
  {path:"candidateAdd",component:CandidateSignComponent},
  {path:"candidateList",component:CandidateListComponent,canActivate:[CandidateListGuard]},
  {path:"employerList",component:EmployerListComponent},
  {path:"jobPositionList",component:JobPositionListComponent},
  {path:"employerAdd",component:EmployerSignComponent},
  {path:"login",component:LoginComponent},
  {path:"jobPositionAdd",component:JobPositionAddComponent,canActivate:[JobPositionAddGuard]},
  {path:"jobAdvertisementAdd",component:JobAdvertisementAddComponent,canActivate:[JobAdversitementAddGuard]},
  {path:"activeJobAdvertList",component:ActiveJobAdvertListComponent},
  {path:"activeJobAdvertListByDate",component:ActiveJobAdvertByDateComponent},
  {path:"activeJobAdvertListByEmployer",component:ActivJobAdvertByEmployerComponent},
  {path:"changeActivite",component:CloseJobAdvertisementComponent,canActivate:[ChangeActivityJobAdvertGuard]},
  {path:"candidateSchool",component:CandidateSchoolComponent},
  {path:"cv",component:CvAddComponent},
  {path:"imageUpload",component:CandidateImageComponent},
  {path:"cvDetail",component:CvDetailComponent},
  {path:"verification",component:VerificateJobAdvertComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
