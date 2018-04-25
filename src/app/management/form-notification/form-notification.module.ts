import { ManagementModule } from './../management.module';
import { NgModule } from '@angular/core';
import { FormNotificationComponent } from './form-notification.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
// import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
// import { TimepickerModule } from 'ngx-bootstrap/timepicker';



@NgModule({
  imports: [
    ManagementModule,
    FormsModule,
    ReactiveFormsModule,
    // BsDatepickerModule.forRoot(),
    CommonModule
  ],
  declarations: [
    FormNotificationComponent,
  ],
})


export class FormNotificationModule { }

