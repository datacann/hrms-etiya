import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  CandidateSchool } from '../models/candidate/candidate-school/candidateSchool';
import { SchoolListResponse } from '../models/school/schoolListResponse';

@Injectable({
  providedIn: 'root'
})
export class CandidateSchoolService {

  constructor(private httpClient:HttpClient) { }

  apiUrl = "https://javareactcamp-hrms-backend.herokuapp.com/api/candidateSchools"

  add(candidate:CandidateSchool){
    return this.httpClient.post(this.apiUrl + "/add",candidate)
  }

  getCandidatesByGradYear(sortDirection: number): Observable<SchoolListResponse> {
    return this.httpClient.get<SchoolListResponse>(this.apiUrl + '/get/byGradYear?sortDirection=' + sortDirection);
  }

}
