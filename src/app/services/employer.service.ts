import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employer } from '../models/employer/employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  apiUrl:string="https://javareactcamp-hrms-backend.herokuapp.com/api/employers"

  constructor(private httpClient:HttpClient) { }

  add(employer:Employer){
    return this.httpClient.post(this.apiUrl + "/add",employer)
  }
}
