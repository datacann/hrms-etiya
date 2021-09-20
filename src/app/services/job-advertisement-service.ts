import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobAdvertisement } from '../models/job-advertisement/jobAdvertisement';

@Injectable({
  providedIn: 'root'
})
export class JobAdvertisementService {

  apiUrl:string="https://javareactcamp-hrms-backend.herokuapp.com/api/jobAdvertisements"

  constructor(private httpClient:HttpClient) { }


  add(jobAdvertisement:JobAdvertisement):Observable<JobAdvertisement>{
    return this.httpClient.post<JobAdvertisement>(this.apiUrl+"/add",jobAdvertisement)
  }

  getAll(){
    return this.httpClient.get<JobAdvertisement>(this.apiUrl+"/get/all")
  }

  getJobsByActive(){
    return this.httpClient.get(this.apiUrl + "/get/active")
  }

  getActiveJobByDate(){
    return this.httpClient.get(this.apiUrl + "/get/activeVerifiedByCreatedAt")
  }

  getActiveJobByEmployer(){
    return this.httpClient.get(this.apiUrl + "/get/byEmployer")
  }


}