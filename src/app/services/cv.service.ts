import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CandidateListResponse } from '../models/candidate/candidateListResponse';
import { Cv } from '../models/cv/cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {

  constructor(private httpClient:HttpClient) { }

  apiUrl= "https://javareactcamp-hrms-backend.herokuapp.com/api/cvs"


  add(cv:Cv):Observable<Cv[]>{
    return this.httpClient.post<Cv[]>(this.apiUrl + "/add",cv)
  }

  getById(id:number):Observable<CandidateListResponse>{
    return this.httpClient.post<CandidateListResponse>(this.apiUrl + "/get/byId?cvId=",id)
  }

  getCvs():Observable<Cv>{
    return this.httpClient.get<Cv>(this.apiUrl+"/get/all");
  }


  
}
