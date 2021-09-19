import { Component, OnInit } from '@angular/core';
import { JobPosition } from 'src/app/models/jobPosition/jobPosition';
import { JobPositionService } from 'src/app/services/job-position.service';

@Component({
  selector: 'app-job-position-list',
  templateUrl: './job-position-list.component.html',
  styleUrls: ['./job-position-list.component.css']
})
export class JobPositionListComponent implements OnInit {

  jobPositions:JobPosition[]=[]

  constructor(private jobPositionService:JobPositionService) { }

  ngOnInit(): void {
    this.getPositions()

  }

  getPositions(){

    this.jobPositionService.getJobPositions().subscribe((data:any)=>{
      this.jobPositions=data.data
    })

  }
}
