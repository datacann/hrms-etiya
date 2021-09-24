import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from 'src/app/models/candidate/candidate';
import { Cv } from 'src/app/models/cv/cv';
import { CandidateService } from 'src/app/services/candidate.service';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {

  candidateId:number;
  cv: Cv[]=[];
  loggedUser:any



  constructor(private activatedRoute: ActivatedRoute,
              private candidateService: CandidateService,
              private cvService:CvService) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe(params => this.candidateId = params["id"]);
    // this.cvService.getById(this.candidateId).subscribe(res => this.candidate = res.data)
    console.log(this.getUserId())
    this.getUserId()
  //   this.activatedRoute.params.subscribe(params=>{
  //     this.getUserId(params["userId"])
  // })
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data;
  }


}
