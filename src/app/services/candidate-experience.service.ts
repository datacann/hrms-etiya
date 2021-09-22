import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateExperience } from '../models/candidate/candidate-experience/candidateExperience';

@Injectable({
  providedIn: 'root'
})
export class CandidateExperienceService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://javareactcamp-hrms-backend.herokuapp.com/api/candidateJobExperiences"


  add(candidateExperience:CandidateExperience){
    return this.httpClient.post(this.apiUrl + "/add",candidateExperience)
  }
}
