import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate/candidate';
import { CandidateListResponse } from '../models/candidate/candidateListResponse';
import { GitHub } from '../models/github/github';
import { LinkedIn } from '../models/linkedin/linkedin';

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

  addGithub(gitHub:GitHub,id:number):Observable<GitHub>{
    return this.httpClient.post<GitHub>(this.apiUrl+"/update/githubAccount?candId="+id+"&githubAccount="+gitHub.githubAccount,gitHub)
  }

  addLinked(linked:LinkedIn,id:number):Observable<LinkedIn>{
    return this.httpClient.post<LinkedIn>(this.apiUrl+"/update/linkedinAccount?candId="+id+"&linkedinAccount="+linked.linkedInAccount,linked)
  }

  getCandidateById(id: number): Observable<CandidateListResponse> {
    return this.httpClient.get<CandidateListResponse>(this.apiUrl + '/get/byId?candId=' + id);
  }

}