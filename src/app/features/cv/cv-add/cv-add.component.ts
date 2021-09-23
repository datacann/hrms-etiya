import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidateSchoolService } from 'src/app/services/candidate-school.service';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv-add',
  templateUrl: './cv-add.component.html',
  styleUrls: ['./cv-add.component.css']
})
export class CvAddComponent implements OnInit {

  constructor(private cvService:CvService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService) { }

  cvAddForm:FormGroup
  candidate:any

  ngOnInit(): void {
    this.createCvAddForm()
    console.log(this.getCandidateJObExperienceId())
    console.log(this.getCandidateLanguageId())
  }

  createCvAddForm() {
    this.cvAddForm = this.formBuilder.group({
      candidateJobExperienceIds: [this.getCandidateJObExperienceId()],
      candidateLanguageIds:[this.getCandidateLanguageId()],
      candidateSchoolIds: [this. getCandidateschoolId()],
      candidateSkillIds: [this.getCandidateSkillsId()],
      coverLetter: ['', Validators.required],
      title: ['', Validators.required],
      linkedinAccount:['', Validators.required],
      githubAccount:['', Validators.required],
    });
  }

  cvAdd() {
    if (this.cvAddForm.valid) {
    
       this.cvService.add(this.cvAddForm.value).subscribe(
         (response: any) => {
           console.log(this.cvAddForm.value);
           
           this.toastrService.success(response.message, 'CV eklendi');
         },
         (responseError) => {
           this.toastrService.error(
             JSON.stringify(responseError.error.data.errors),
             'Doğrulama hatası'
           );
         }
       );
     }else {
      this.toastrService.error('Hata.');
    }
  } 

  getCandidateJObExperienceId():any{
    this.candidate = JSON.parse(localStorage.getItem('user'))
    return this.candidate.data.candidateJobExperiences
  }

  getCandidateLanguageId():any{
    this.candidate = JSON.parse(localStorage.getItem('user'))
    return this.candidate.data.candidateLanguages
  }

  getCandidateschoolId():any{
    this.candidate = JSON.parse(localStorage.getItem('user'))
    return this.candidate.candidateSchools
  }

  getCandidateSkillsId():any{
    this.candidate = JSON.parse(localStorage.getItem('user'))
    return this.candidate.data.candidateSkills
  }

}
