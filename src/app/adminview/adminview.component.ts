import { Component , OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { doctor } from '../doctor.model';
import { DoctorService } from '../doctor.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent {
  selectedDayOfWeek: string = '';
  timeSlots: doctor[] = [];
  // ts_day:doctort[]=[];
  ts_day:string[]=[];
  day1!:string;
  doctor1:doctor={
    timeslotid: 0,
    dayofweek: 0,
    starttime: 0,
    endtime: 0,
    status1: true
  };
  dayofweek!:number;
  fromtime: string = '';
  totime: string = '';
  
  
    constructor(private doctorservice:DoctorService){}

    ngOnInit(){
      this.doctorservice.getAllTimeSlots()
      .subscribe(
        {
          next:(doctor2)=>{
            this.timeSlots=doctor2;
          },
          error:(response)=>{
            console.log(response);

          }
        }
      );
    }
  showTimeslots(dayOfWeek: string) {
    this.day1=dayOfWeek;
    this.doctorservice.getTimeslotsofday(dayOfWeek)
    .subscribe(
      {
        next:(d)=>{
          this.ts_day=d;
          console.log(d);
        },
        error:(response)=>{
          console.log(response);
        }
      }
    ); 
    
  }
  tid!:number;
  deleteTimeslot(timeslotid: number) {
    // this.tid=parseInt(timeslot, 10);
    this.doctorservice.deletetimeslot(timeslotid)
    .subscribe( 
      {
        next:(del)=>{
        this.doctorservice.getTimeslotsofday(this.day1);
        console.log(del);
        
      },
      error:(response) => {
        console.log(response);
      }}
    );
    window.location.reload();
  }
  
  addt:string="";
  onSubmit() {
    
    var ft=this.fromtime.toString().split(':');
    var totalft=parseInt(ft[0],10)*60+parseInt(ft[1],10);
    var et=this.totime.toString().split(':');
    var totalet=parseInt(et[0],10)*60+parseInt(et[1],10);
    this.doctor1.starttime=totalft;
    this.doctor1.endtime=totalet;
    this.doctor1.status1=true;
    this.doctorservice.addtimeslot(this.doctor1).subscribe({
      next:(msg)=>{
        this.addt=msg;
        console.log(this.addt);
        this.doctorservice.getTimeslotsofday(this.day1);
        
      },
      error:(error)=>{
        console.log(error.error);
      }
    });
    window.location.reload();

    
    

  }
}





