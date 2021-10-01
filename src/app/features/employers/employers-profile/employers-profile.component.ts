import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employers-profile',
  templateUrl: './employers-profile.component.html',
  styleUrls: ['./employers-profile.component.css']
})
export class EmployersProfileComponent implements OnInit {
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
