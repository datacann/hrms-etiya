import { Component, OnInit } from '@angular/core';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { JobAdvertisementService } from 'src/app/services/job-advertisement-service';

@Component({
  selector: 'app-active-job-advert-list',
  templateUrl: './active-job-advert-list.component.html',
  styleUrls: ['./active-job-advert-list.component.css']
})
export class ActiveJobAdvertListComponent implements OnInit {

  activeJobAdverts:JobAdvertisement[]=[] 
  
  constructor(private jobAdvetisementService:JobAdvertisementService) { }

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
}
