import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidateService } from 'src/app/services/candidate.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-candidate-sign',
  templateUrl: './candidate-sign.component.html',
  styleUrls: ['./candidate-sign.component.css']
})
export class CandidateSignComponent implements OnInit {

  checkNationalityId: boolean
  checkEmail: boolean

  candidateSignForm: FormGroup

  constructor(private formBuilder: FormBuilder,
    private toastrService: ToastrService, private candidateService: CandidateService, private userService: UserService) { }

  ngOnInit(): void {
    this.createCandidateAddForm()

  }

  createCandidateAddForm() {
    this.candidateSignForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      nationalityId: ["", Validators.required],
      birthYear: ["", Validators.required],
    })
  }


  addCandidate() {

    if (this.candidateSignForm.valid) {
      this.checkByNationalityId();
      this.checkByEmail();
      if (!this.checkNationalityId && !this.checkEmail) {
        this.candidateService.add(this.candidateSignForm.value).subscribe((response: any) => {
          this.toastrService.success(response.message, "başarılı")
          console.log(this.checkEmail)
          console.log(this.checkNationalityId)
           })      
      }else if(this.checkNationalityId){
        this.toastrService.error("bu natinality id kullanılıyor")
      }else if(this.checkEmail){
        this.toastrService.error("bu e posta kullanılıyor")
      }
    } else {
      this.toastrService.error("formunuz geçersiz")
    }
  }

  

  checkByNationalityId() {
    this.candidateService.getCandidatesByNationalityId(this.candidateSignForm.value["nationalityId"]).subscribe((data: any) => {
      if (data.success == true) {
        this.checkNationalityId = true
      } else {
        this.checkNationalityId = false
      }
    })
  }

  checkByEmail() {
    this.userService.getByEmail(this.candidateSignForm.value["email"]).subscribe((data: any) => {
      if (data.success == true) {
        this.checkEmail = true        
      } else {
        this.checkEmail = false
      }
    })
  }


}

 // if (!this.checkEmail) {
        //   this.candidateService.add(this.candidateAddForm.value).subscribe((response: any) => {
        //     this.toastrService.success(response.message, "başarılı")
        //   })
        // } else {
        //   
        // }
