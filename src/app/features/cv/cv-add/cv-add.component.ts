import { Component, OnInit } from '@angular/core';
import { CandidateSchoolService } from 'src/app/services/candidate-school.service';

@Component({
  selector: 'app-cv-add',
  templateUrl: './cv-add.component.html',
  styleUrls: ['./cv-add.component.css']
})
export class CvAddComponent implements OnInit {

  constructor(private candidateSchoolService:CandidateSchoolService) { }

  ngOnInit(): void {
  }

  

}
