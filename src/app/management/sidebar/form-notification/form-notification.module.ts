import { SidebarComponent } from './../sidebar.component';
import { ManagementModule } from './../../management.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormNotificationComponent } from './form-notification.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { TopbarComponent } from '../../topbar/topbar.component';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';


const routes: Routes = [
  {path: 'form-notification', component: FormNotificationComponent}
]

@NgModule({
  imports: [
    ManagementModule,
    TopbarComponent,
    SidebarComponent,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forChild(routes),  
    CommonModule
  ],
  declarations: [
    FormNotificationComponent,
  ],
})


export class FormNotificationModule { }

