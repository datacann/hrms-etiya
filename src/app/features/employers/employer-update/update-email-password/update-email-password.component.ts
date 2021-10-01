import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-email-password',
  templateUrl: './update-email-password.component.html',
  styleUrls: ['./update-email-password.component.css']
})
export class UpdateEmailPasswordComponent implements OnInit {

  updateWebsiteAndEmailForm: FormGroup
  user:any
  

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService,
    private employerService: EmployerService,
    private userService:UserService) { }

  ngOnInit(): void {

    this.createUpdateForm()
    this.Userget()
  }

  createUpdateForm() {
    this.updateWebsiteAndEmailForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      id: [this.employerService.getEmployerId()],
      website: ["", Validators.required]
    })
  }

  update() {
    if (this.updateWebsiteAndEmailForm.valid) {
      this.employerService.updateEmailAndWebsite(this.updateWebsiteAndEmailForm.value).subscribe((data: any) => {
        this.toastrService.success("Request sent")
      }, (responseError) => {
        let message = JSON.stringify(responseError.error.data.errors);
        this.toastrService.error(
          message.replace(/{|}|"/gi, ''),
          'Validation Errors'
        );
      })
    }
    else {
      this.toastrService.warning("Missing Data")
      console.log(this.updateWebsiteAndEmailForm)
    }
  }
  Userget(){
    this.user =this.userService.getEmployer()
    return this.user
  }
}
