import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { CandidateService } from 'src/app/services/candidate.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';

@Component({
  selector: 'app-active-job-advert-list',
  templateUrl: './active-job-advert-list.component.html',
  styleUrls: ['./active-job-advert-list.component.css']
})
export class ActiveJobAdvertListComponent implements OnInit {

  activeJobAdverts:JobAdvertisement[]=[] 
  loggedCandidate: Candidate;
  
  constructor(private jobAdvetisementService:JobAdvertisementService,
    private candidateService:CandidateService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.getJobAdvertActive()
  }

  getJobAdvertActive(){
    this.jobAdvetisementService.getJobsByActive().subscribe((data:any)=>{
      this.activeJobAdverts = data.data
      console.log(this.activeJobAdverts)
    })
  }

  changeActivite(jobAdvertisement:JobAdvertisement){
    this.jobAdvetisementService.closeJobAdvertisement(jobAdvertisement).subscribe((response:any)=>{
    })
  }

  addToFavorites(id:number) {
    this.candidateService.addFavoriteJob(this.loggedCandidate,id).subscribe((response:any)=>{
      this.toastrService.success("Added to favorite successfully.")
      this.pageReloadDelay()
    },((responseError)=>{
      this.toastrService.error("This job advertisement exists in your favorites.")
    }))
  }

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 500);
  }

}
