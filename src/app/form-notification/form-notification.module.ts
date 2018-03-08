import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormNotificationComponent, CalendarDemo } from './form-notification.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms'
// import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
// import {DatePickerModule} from 'ng-datepicker';
// import { DateTimePickerModule } from 'ng-pick-datetime-fork';
import {CalendarModule} from 'primeng/calendar';

const routesConfig: Routes = [
  {path: 'form-notification', component: FormNotificationComponent}
]



@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    // OwlDateTimeModule, 
    // OwlNativeDateTimeModule,
    // DatePickerModule,
    CalendarModule,
    CalendarDemo,
    RouterModule.forChild(routesConfig),
    CommonModule
  ],
  declarations: [
    FormNotificationComponent,
  ],
})

export class FormNotificationModule { }

