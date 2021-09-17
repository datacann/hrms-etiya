import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidateSignComponent } from './features/candidate/candidate-sign/candidate-sign.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NaviComponent } from './features/navi/navi.component';
import { EmployerSignComponent } from './features/employers/employer-sign/employer-sign.component';



@NgModule({
  declarations: [
    AppComponent,
    CandidateSignComponent,
    NaviComponent,
    EmployerSignComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass:"toast-bottom-right"})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
