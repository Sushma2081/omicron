import { Component, ViewChild } from '@angular/core';
import {NgbDate,NgbCalendar, NgbDatepicker, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../appointment.service';
import { appointmentt } from '../appointment.model';

@Component({
  selector: 'app-citizenview',
  templateUrl: './citizenview.component.html',
  styleUrls: ['./citizenview.component.css']
})
export class CitizenviewComponent {
  date:NgbDate;
  @ViewChild('datepicker', { static: false }) datepicker!: NgbDatepicker ;
  
  selectedTimeSlot!:string;
  appointmentsondate:string[]=[];
  startTime!: string;
  endTime!: string;

  constructor(private calendar:NgbCalendar,private ngbDateParserFormatter:NgbDateParserFormatter,private NgbModule:NgbModule,private router: Router,
    private appointmentservice:AppointmentService){
    this.date=calendar.getToday();
  }
  navigateMonth(step: number) {
    const currentDate = this.datepicker.navigateTo() as NgbDateStruct | void;
    console.log('Inside navigateMonth()');

    if (currentDate && typeof currentDate === 'object') {
      const { year = 0, month = 0, day = 1 } = currentDate;
      const newDate = { year: year, month: month + step, day: day };
      this.datepicker.navigateTo(newDate);
    }
  } 
 onDateSelect(date:NgbDate){
    this.date=date;
    const year = this.date.year.toString().padStart(4, '0');
    const month = this.date.month.toString().padStart(2, '0');
    const day = this.date.day.toString().padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;
    
    this.appointmentservice.getTimeslotsofday(dateString).subscribe({
      next:(msg)=>{
        this.appointmentsondate=msg;
      }
    })

    console.log(dateString);

  } 
  appointmentl:appointmentt={
    appointmentid:0,
    fromtime:new Date(),
    totime:new Date(),
    status1:true
  };
  ftd!:string;
  ttd!:string;
  onTimeSlotSelect(slot:string){
    this.selectedTimeSlot=slot;
    const [fromTimeString,toTimeString]=slot.split('-');
    console.log(this.date);
    const year = this.date.year;
    const month = this.date.month-1; 
    const day = this.date.day+1;
    const date = new Date(year, month, day);

     this.startTime=date.toISOString().slice(0,10)+" "+ fromTimeString;
    this.endTime=date.toISOString().slice(0,10)+" "+toTimeString;
    // console.log(this.startTime);
    // console.log(this.endTime);
    
    const dateStringST= this.startTime;
    const datePartsST = dateStringST.split(" ");
    const [yearST, monthST, dayST] = datePartsST[0].split("-").map(part => parseInt(part, 10));;
    const [hourST, minuteST] = datePartsST[1].split(":").map(part => parseInt(part, 10));;
    const dateObjST = new Date(yearST, monthST - 1, dayST, hourST, minuteST);
    this.appointmentl.fromtime=dateObjST;
    const dateStringET= this.endTime;
    const datePartsET = dateStringET.split(" ");
    const [yearET, monthET, dayET] = datePartsET[0].split("-").map(part => parseInt(part, 10));;
    const [hourET, minuteET] = datePartsET[1].split(":").map(part => parseInt(part, 10));;
    const dateObjET = new Date(yearET, monthET - 1, dayET, hourET, minuteET);
    this.appointmentl.totime=dateObjET;
    console.log(dateObjST);
    console.log(dateObjET);
    this.appointmentl.status1=true;
    this.ftd=fromTimeString;
    this.ttd=toTimeString;

    this.appointmentservice.addappointment(this.appointmentl).subscribe(
      (data)=>{
      next:(data: any) =>{
        console.log(data);

      }
      error:(error1: any)=>{
        console.log(error1);
      }
    });
  }
   onSubmit(){
    
    const dateString = this.ngbDateParserFormatter.format(this.date);
    
    localStorage.setItem('date',dateString);
    localStorage.setItem('time',this.selectedTimeSlot);
    const [fromTime,toTime]=this.selectedTimeSlot.split('-');
    this.router.navigate(['/citizenview/form'],{queryParams:{date:dateString,fromtime:this.ftd,totime:this.ttd}});
   } 
  }

