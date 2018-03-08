import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentManagementComponent } from './student-management.component';
import { CommonModule } from '@angular/common';

const routesConfig: Routes = [
    {path: 'student-management', component: StudentManagementComponent }
  ]

  @NgModule({
    imports: [
          RouterModule.forChild(routesConfig),
          CommonModule
      ],
    declarations: [
        StudentManagementComponent,
    ],
  })

  export class StudentManagementModule{}