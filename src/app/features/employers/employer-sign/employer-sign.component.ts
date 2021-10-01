import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employer-sign',
  templateUrl: './employer-sign.component.html',
  styleUrls: ['./employer-sign.component.css']
})
export class EmployerSignComponent implements OnInit {

  constructor(private employerService:EmployerService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private userService:UserService,
    private router:Router) { }

  employerSignForm:FormGroup
  password:string=""
  verifyPassword:string=""
  checkEmail: boolean
  matchPassword: boolean;
  checkCompanyName: boolean;
  website: boolean;
  checkDomain: boolean;


  ngOnInit(): void {
    this.createEmployerAddForm()
  }

  createEmployerAddForm() {
    this.employerSignForm = this.formBuilder.group({
      companyName: ["", Validators.required],
      website: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required,Validators.minLength(6)]],
      verifyPassword:["",Validators.required],
      phoneNumber: ['', [ Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(10), Validators.maxLength(10)]]
    });
    
  }

addEmployer() {
  this.matchCandidatePassword();
    this.checkEmployerEmail();
    this.checkEmployerCompanyName();
    this.checkEmployerWebsiteName();
    this.checkEmployerDomain();
    if (this.employerSignForm.valid) {
      if (!this.matchPassword && !this.checkEmail && !this.checkCompanyName && !this.website && !this.checkDomain) {
        let employerModel = Object.assign({}, this.employerSignForm.value);
        this.employerService.add(employerModel).subscribe((response: any) => {
          this.toastrService.success("Kaydınız yapıldı.", employerModel.companyName);
          this.employerSignForm.reset();
          setTimeout(() => this.router.navigate(['login']), 1400);
        })

      }
    }
}

matchCandidatePassword() {
  if (this.password === this.verifyPassword) {
    this.matchPassword = false;
  } else {
    this.matchPassword = true;
    this.toastrService.error("Passwords could not be verified. Try again.", "Error")
  }
}

checkEmployerEmail() {
  this.userService.getByEmail(this.employerSignForm.value["email"]).subscribe((data: any) => {
    if (data.data === false) {
      this.checkEmail = false;
    } else {
      this.checkEmail = true;
      this.toastrService.error("This email has already been used.", "Error!")
    }
  })
}

checkEmployerCompanyName() {
  this.employerService.checkCompanyName(this.employerSignForm.value["companyName"]).subscribe((data: any) => {
    if (data.data === false) {
      this.checkCompanyName = false;
    } else {
      this.checkCompanyName = true;
      this.toastrService.error("This company name has already been used.", "Error!")
    }
  })
}

checkEmployerWebsiteName() {
  this.employerService.checkWebsiteName(this.employerSignForm.value["website"]).subscribe((data: any) => {
    if (data.data === false) {
      this.website = false;
    } else {
      this.website = true;
      this.toastrService.error("This website name has already been used.", "Error!")
    }
  })
}

checkEmployerDomain() {
    let website = this.employerSignForm.value['website'];
    let domain = website.replace('www.', '');
    
    let email = this.employerSignForm.value['email'];
    let res = email.split('@');

    if (domain === res[1]) {
      this.checkDomain = false;
    } else {
      this.checkDomain = true;
      this.toastrService.error("Website and email do not match.", "Error!");
    }
}
}








