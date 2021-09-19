import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate/candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  apiUrl:string="https://javareactcamp-hrms-backend.herokuapp.com/api/candidates"

  constructor(private httpClient:HttpClient) { }

  add(candidate:Candidate){
    return this.httpClient.post(this.apiUrl + "/add",candidate)
  }

  getCandidatesByNationalityId(nationalityId:string){
    return this.httpClient.get(this.apiUrl + "/exists/byNatId?nationalityId=" + nationalityId)
  }

  getCandidates():Observable<Candidate[]>{ 
    return this.httpClient.get<Candidate[]>(this.apiUrl+"/get/all")
  }

}