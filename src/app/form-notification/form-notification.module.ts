import { StudentManagementModule } from './../student-management/student-management.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormNotificationComponent } from './form-notification.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
// import { TimepickerModule } from 'ngx-bootstrap/timepicker';


const routesConfig: Routes = [
  {path: 'form-notification', component: FormNotificationComponent}
]

@NgModule({
  imports: [
    StudentManagementModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forChild(routesConfig),
    CommonModule
  ],
  declarations: [
    FormNotificationComponent,
  ],
})


export class FormNotificationModule { }

