import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:string="https://javareactcamp-hrms-backend.herokuapp.com/api/users"

  constructor(private httpClient:HttpClient) { }

  getByEmail(email:string){
    return this.httpClient.get(this.apiUrl + "/exists/byEmail?email=" + email)
  }


}



