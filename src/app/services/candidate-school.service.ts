import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  CandidateSchool } from '../models/candidate-school/candidateSchool';

@Injectable({
  providedIn: 'root'
})
export class CandidateSchoolService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSchools"

  add(candidate:CandidateSchool){
    return this.httpClient.post(this.apiUrl + "/add",candidate)
  }

}
