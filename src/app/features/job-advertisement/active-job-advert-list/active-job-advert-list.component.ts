import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Candidate } from 'src/app/models/candidate/candidate';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { CandidateService } from 'src/app/services/candidate.service';
import { JobAdvertisementService } from 'src/app/services/job-advertisement.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-active-job-advert-list',
  templateUrl: './active-job-advert-list.component.html',
  styleUrls: ['./active-job-advert-list.component.css']
})
export class ActiveJobAdvertListComponent implements OnInit {

  loggedCandidate: any
  activeJobAdverts: JobAdvertisement[] = []
  candidate: any
  id: number
  message: any
  favs: JobAdvertisement[] = []
  loading: boolean = true
  loggedUser: any
  userId:string
  userInfo:any
  user:any
  messsage:any

  constructor
    (private jobAdvetisementService: JobAdvertisementService,
      private userService: UserService,
      private candidateService: CandidateService,
      private favAdverts: CandidateService,
      private toastrService: ToastrService,
      private favoriteService: CandidateService
    ) { }

  ngOnInit(): void {
    this.getJobAdvertActive()
    console.log(this.favs)
    this.id = this.userService.getEmployer().id
    this.getCandidateById()
    console.log(this.getUserInfo())
  }

  getJobAdvertActive() {
    this.jobAdvetisementService.getJobsByActive().subscribe((data: any) => {
      this.activeJobAdverts = data.data
      console.log(this.activeJobAdverts)
      this.loading = false
    })
  }

  changeActivity(jobAdvertisement: JobAdvertisement) {
    this.jobAdvetisementService.closeJobAdvertisement(jobAdvertisement).subscribe((response: any) => {
      this.toastrService.success("succesfull")
    })
  }

  getCandidataId(): any {
    this.candidate = JSON.parse(localStorage.getItem("user"))
    this.message = this.candidate.message
    return this.candidate.data.id
  }


  addToFavs(jobAdvertisement: JobAdvertisement) {
    this.favAdverts.addFavoritesJob(jobAdvertisement, this.getCandidataId()).subscribe(data => {
      this.toastrService.success("Added")
      setTimeout(() => window.location.reload(), 1000)
    })
    console.log(jobAdvertisement.id)
  }

  getCandidateById() {
    this.candidateService.getCandidateById(this.id).subscribe((response: any) => {
      this.loggedCandidate = response.data;
      this.favs = response.data.favoriteJobAdvertisements

      this.loading = false;
    })
  }

  removeFavs(jobId: number) {
    this.favoriteService.removeFavoriteJob(this.loggedCandidate, jobId).subscribe(data => {
      this.toastrService.warning("Removed")
      setTimeout(() => window.location.reload(), 1000)
    })
  }

  checkFavJob(id: number) {
    let favJobValue = this.favs.find((f) => f.id === id)
    if (favJobValue) {
      return true
    }

    else {
      return false
    }
  }


  getUserInfo() {
    if (localStorage.getItem("user")) {
      this.user = JSON.parse(localStorage.getItem("user"))
      this.userInfo = this.user.data
      this.messsage = this.user.message
      if (this.messsage.includes("employer")) {
        this.userId = "employer"
      }
      else if (this.messsage.includes("candidate")) {
        this.userId = "candidate"
      } else {
        this.userId = "systemEmployee"
      }
    }
  }

 
}
