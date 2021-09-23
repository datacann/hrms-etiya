import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-candidate-linkedin',
  templateUrl: './candidate-linkedin.component.html',
  styleUrls: ['./candidate-linkedin.component.css']
})
export class CandidateLinkedinComponent implements OnInit {

  linkedForm:FormGroup
  candidateId:any

  constructor(private candidateService:CandidateService,
    private formbBuilder:FormBuilder,
    private toastrService:ToastrService) { }

  ngOnInit(): void {

    this.createLinkedForm()
    this.getCandidataId()

  }

  createLinkedForm(){

    this.linkedForm=this.formbBuilder.group({
      candidateId:[ this.getCandidataId()],
      linkedInAccount:["",Validators.required]
    })
  }

  add(){
    if(this.linkedForm.valid){
      this.candidateService.addLinked(this.linkedForm.value, this.getCandidataId()).subscribe((data:any)=>{

        this.toastrService.success("Linked hesabı eklendi")

      },(dataError)=>{
        let message=JSON.stringify(dataError.error.data.error);

        this.toastrService.error(
          message.replace(/{|}|"/gi, ''),
          'Doğrulama hatası'
        );
      }
      )
    }
    else{
      this.toastrService.warning("Missing Data")
    }
  }

  getCandidataId():any{
    this.candidateId=JSON.parse(localStorage.getItem("user"))
    return this.candidateId.data.id
  }

}
