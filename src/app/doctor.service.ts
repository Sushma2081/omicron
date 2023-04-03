import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { doctor } from './doctor.model';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseApiUrl:string='https://localhost:7050';
  constructor(private http:HttpClient) { }
  getAllTimeSlots():Observable<doctor[]>{
    return this.http.get<doctor[]>(this.baseApiUrl+'/Omicron/GetTimeSlots');
  }

  getTimeslotsofday(day:string): Observable<string[]> {
    return this.http.get<string[]>(this.baseApiUrl+'/Omicron/GetTimeSlotsday?day='+day);
  }
  
  addtimeslot(doctorrequest:doctor):Observable<string>{
    return this.http.post<string>(this.baseApiUrl+'/Omicron/Addtimeslot',doctorrequest);
  }
  

  deletetimeslot(Id: number): Observable<string> {
    return this.http.delete<string>(this.baseApiUrl+'/Omicron/DeleteTimeSlot?Id=' + Id);
}

}
