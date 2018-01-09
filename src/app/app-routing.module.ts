import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { StudentManagementModule } from './student-management/student-management.module'
// import { CommercePageModule } from './commerce-page/commerce-page.module'
import { CommonModule } from '@angular/common';

const routesConfig: Routes = [
 
  ]

  @NgModule({
    imports: [
        // CommercePageModule,
        StudentManagementModule,
        RouterModule.forRoot(routesConfig),
        CommonModule
      ],
    declarations: [
        
    ],
      exports: [RouterModule]
  })

  export class AppRoutingModule{}