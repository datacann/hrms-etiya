import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Language } from 'src/app/models/language/language';
import { CandidateLanguageService } from 'src/app/services/candidate-language.service';
import { CandidateService } from 'src/app/services/candidate.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-candidate-language',
  templateUrl: './candidate-language.component.html',
  styleUrls: ['./candidate-language.component.css']
})
export class CandidateLanguageComponent implements OnInit {

  languages: Language[] = []

  candidateId: any
  candidateLanguageForm: FormGroup


  constructor(private languageService: LanguageService,
    private toastrService: ToastrService,
    private candidateService: CandidateService,
    private formBuilder: FormBuilder,
    private candidateLanguageService:CandidateLanguageService) { }

  ngOnInit(): void {
    this.getLanguages()
    this.getCandidateId()
    this.createLanguageForm()

  }

  createLanguageForm() {
    this.candidateLanguageForm = this.formBuilder.group({
      candidateId: [ this.getCandidateId()],
      languageId: ["", Validators.required],
      languageLevel: ["", Validators.required]
    })
  }

  add() {
    if (this.candidateLanguageForm.valid) {
      this.candidateLanguageService.add(this.candidateLanguageForm.value).subscribe(
        (response: any) => {
          this.toastrService.success('Başarılı');
        },
        (responseError) => {
          let message = JSON.stringify(responseError.error.data.errors);
          this.toastrService.error(
            message.replace(/{|}|"/gi, ''),
            'Doğrulama hatası'
          );
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik', 'Dikkat!');
    }
  }

  getLanguages() {
    this.languageService.getLanguages().subscribe((data: any) => {
      this.languages = data.data
    },
    )
  }

  getCandidateId():any{
    this.candidateId = JSON.parse(localStorage.getItem('user'))
    return this.candidateId.data.id
  }

}
