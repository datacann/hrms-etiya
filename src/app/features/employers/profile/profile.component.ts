import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UserService) { }
  user:any
  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    this.user=this.userService.getEmployer()
    console.log(this.user)
  }

}