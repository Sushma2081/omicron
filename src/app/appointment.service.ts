import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appointmentt } from './appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  baseApiUrl:string='https://localhost:7050';
  constructor(private http:HttpClient) {

   }
   getTimeslotsofday(date:string): Observable<string[]> {
    return this.http.get<string[]>(this.baseApiUrl+'/Omicron/displayavailabletimeslots?date='+date);
  }
  addappointment(appo:appointmentt):Observable<string>{
    return this.http.post<string>(this.baseApiUrl+'/Omicron/reserveappointment',appo); 
  }

  // addappointment(appo:appointmentt):Observable<string>{
  //   const headers = new HttpHeaders({'Content-Type': 'application/json'});
  //   return this.http.post<string>(this.baseApiUrl+'/Omicron/reserveappointment', JSON.stringify(appo), {headers: headers}); 


}
