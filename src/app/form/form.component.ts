import { Component,OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  date!: string | null;
  fromTime!: string | null;
  toTime!: string | null;
  name:string="";
  email:string="";
  company:string="";
  number1:number=0;

  
  constructor(private route: ActivatedRoute,private router:Router) { }
  
  ngOnInit() {
    
    this.date = this.route.snapshot.queryParamMap.get('date');
    this.fromTime = this.route.snapshot.queryParamMap.get('fromtime');
    this.toTime = this.route.snapshot.queryParamMap.get('totime');
  }

  onSubmit(){
    localStorage.setItem('name',this.name);
    localStorage.setItem('email',this.email);
    localStorage.setItem('company',this.company);
    localStorage.setItem('number',JSON.stringify(this.number1));
    this.router.navigate(['/citizenview/submitted']);
  }

}
