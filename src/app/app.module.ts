import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router,RouterModule, Routes } from '@angular/router';
import { CitizenviewComponent } from './citizenview/citizenview.component';
import { AdminviewComponent } from './adminview/adminview.component';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { SubmittedComponent } from './submitted/submitted.component'
import { AdminViewModule } from './adminview/adminview.module';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { HomeComponent } from './home/home.component';



const approutes:Routes=[
  {path:'citizenview',component:CitizenviewComponent},
  {path:'adminview',component:AdminviewComponent},
  {path:'citizenview/form',component:FormComponent},
  {path:'citizenview/submitted',component:SubmittedComponent},
  {path:'home',component:HomeComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    CitizenviewComponent,
    FormComponent,
    SubmittedComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(approutes),
    BrowserModule,
    FormsModule,
    NgbModule,
    NgbDatepickerModule,
    HttpClientModule
  
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
