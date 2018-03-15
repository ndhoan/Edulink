import { StudentManagementCenterComponent } from './../student-management-center/student-management-center.component';
import { StudentManagementTopbarComponent } from './../student-management-topbar/student-management-topbar.component';
import { FormNotificationComponent } from './../form-notification/form-notification.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentManagementComponent } from './student-management.component';
import { CommonModule } from '@angular/common';
import { FormNotificationModule } from '../form-notification/form-notification.module';
import { StudentManagementSidebarComponent } from '../student-management-sidebar/student-management-sidebar.component';

const routesConfig: Routes = [
    {path: '  ', component: StudentManagementComponent },
  ]

  @NgModule({
    imports: [
          RouterModule.forChild(routesConfig),
          CommonModule
      ],
    declarations: [
        StudentManagementComponent,
        StudentManagementSidebarComponent,
        StudentManagementTopbarComponent,
        StudentManagementCenterComponent,
    ],
  })

  export class StudentManagementModule{}