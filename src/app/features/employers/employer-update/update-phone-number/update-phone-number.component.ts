import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-phone-number',
  templateUrl: './update-phone-number.component.html',
  styleUrls: ['./update-phone-number.component.css']
})
export class UpdatePhoneNumberComponent implements OnInit {

  
  updateForm: FormGroup
  user:any
  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService,private userService:UserService,
    private employerService: EmployerService) { }

  ngOnInit(): void {
    this.createUpdateForm()
    this.Userget()
  }

  createUpdateForm() {
    this.updateForm = this.formBuilder.group({
      id: [this.employerService.getEmployerId()],
      phoneNumber: ["", Validators.required]
    })
  }


  update() {
    if (this.updateForm.valid) {
      this.employerService.updatePhoneNumber(this.updateForm.value).subscribe((data: any) => {
        this.toastrService.success("Request sent")
      }, (responseError) => {
        let message = JSON.stringify(responseError.error.data.errors);
        this.toastrService.error(
          message.replace(/{|}|"/gi, ''),
          'Validation Errors'
        );
      }
      )
    }
    else {
      this.toastrService.warning("Missing Data")
    }
  }
  Userget(){
    this.user =this.userService.getEmployer()
    return this.user
  }
}
