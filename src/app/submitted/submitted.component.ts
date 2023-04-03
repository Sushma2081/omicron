import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})
export class SubmittedComponent {
  date!:string | null;
  time!:string | null;

  ngOnInit(){
    this.date=localStorage.getItem('date');
    this.time=localStorage.getItem('time');
    console.log(this.date+" "+this.time);
  }
}
