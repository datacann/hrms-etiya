import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployerService } from 'src/app/services/employer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-company-name',
  templateUrl: './update-company-name.component.html',
  styleUrls: ['./update-company-name.component.css']
})
export class UpdateCompanyNameComponent implements OnInit {

  updatecompanyNameForm:FormGroup
  user:any

  constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,
    private employerService: EmployerService,private userService:UserService) { }


  ngOnInit(): void {

    this.createUpdateForm()
   console.log( this.employerService.getEmployerId())
   this.Userget()

  }

  createUpdateForm(){
    this.updatecompanyNameForm=this.formBuilder.group({
      companyName:["",Validators.required],
      id:[this.employerService.getEmployerId()]
    })

  }

  updateCompanyName(){
    if(this.updatecompanyNameForm.valid){
      this.employerService.updateCompanyName(this.updatecompanyNameForm.value).subscribe((data:any)=>{
        this.toastrService.success("Request sent")
      },(responseError) => {
        let message = JSON.stringify(responseError.error.data.errors);
        this.toastrService.error(
          message.replace(/{|}|"/gi, ''),
          'Validation Errors'
        );
      })
    }
    else{
      this.toastrService.warning("Missing Data")
    }
  }
  
  
  Userget(){
    this.user =this.userService.getEmployer()
    return this.user
  }

}
