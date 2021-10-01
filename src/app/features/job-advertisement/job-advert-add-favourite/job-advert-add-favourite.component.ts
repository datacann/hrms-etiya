import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobAdvertisement } from 'src/app/models/job-advertisement/jobAdvertisement';
import { CandidateService } from 'src/app/services/candidate.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-job-advert-add-favourite',
  templateUrl: './job-advert-add-favourite.component.html',
  styleUrls: ['./job-advert-add-favourite.component.css']
})
export class JobAdvertAddFavouriteComponent implements OnInit {

  constructor(private userService:UserService,
              private candidateService:CandidateService,
              private toastrService:ToastrService) { }

  favs:JobAdvertisement[]=[]
  id:number
  loading:boolean=true
  loggedCandidate:any
  loggedUser:any

  ngOnInit(): void {
    
    this.getCandidateById()
  }

  
  getCandidateById() {
    this.candidateService.getCandidateById(this.getUserId()).subscribe((response: any) => {
      this.loggedCandidate = response.data;
      this.favs=response.data.favoriteJobAdvertisements
      this.loading = false;
    })
  }

  removeFavs(jobId: number){
    this.candidateService.removeFavoriteJob(this.loggedCandidate,jobId).subscribe(data=>{
      this.pageReloadDelay()
      this.toastrService.warning("Removed")
      
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

  pageReloadDelay() {
    setTimeout(location.reload.bind(location), 1000);
  }

  getUserId(): number {
    this.loggedUser = JSON.parse(localStorage.getItem('user'));
    return this.loggedUser.data.id;
  }
}
