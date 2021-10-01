import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { EmployeeService } from 'src/app/services/employee.service';
import { EmployerService } from 'src/app/services/employer.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-activ-job-advert-by-employer',
  templateUrl: './activ-job-advert-by-employer.component.html',
  styleUrls: ['./activ-job-advert-by-employer.component.css']
})
export class ActivJobAdvertByEmployerComponent implements OnInit {

  loggedUser: any;
  employerJobAdvertisements: JobAdvertisement[] = [];
  loading: boolean = true;
  editId: number;

  constructor(
    private jobAdvertisementService: JobAdvertisementService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getJobAdvertisementsByEmployer();
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }

  getJobAdvertisementsByEmployer() {
    this.jobAdvertisementService.getJobAdvertisementsByEmployer(this.getUserId()).subscribe((response: any) => {
      this.employerJobAdvertisements = response.data;
      this.loading = false;
    })
  }

  catchId(editId: number){
    this.editId = editId;
  }

  updateActivationJobAdvertisement(jobAdvertisement: JobAdvertisement){
    this.jobAdvertisementService.updateJobAdvertisementActivation(jobAdvertisement, this.editId).subscribe((response)=>{
      if(jobAdvertisement.active === true){
        this.toastrService.error('İlan pasif hale getirildi.', jobAdvertisement.employer.companyName + "•" + jobAdvertisement.position.title);
      } else{
        this.toastrService.success('İlan aktif hale getirildi.', jobAdvertisement.employer.companyName + "•" + jobAdvertisement.position.title);
      }
      setTimeout(() => window.location.reload(), 1300);
    })
  }

}
