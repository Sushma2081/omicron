import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminviewComponent } from './adminview.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AdminviewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [DatePipe],
  exports: [
    AdminviewComponent
  ]
})
export class AdminViewModule { }
