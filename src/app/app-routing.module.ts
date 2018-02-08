import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentManagementModule } from './student-management/student-management.module';
import { CommercePageModule } from './commerce-page/commerce-page.module';
import { PricePageModule } from './price-page/price-page.module';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';

const routesConfig: Routes = [
 
  ]

  @NgModule({
    imports: [
        CommercePageModule,
        StudentManagementModule,
        PricePageModule,
        LoginModule,
        RouterModule.forRoot(routesConfig),
        CommonModule
      ],
    declarations: [
        
    ],
      exports: [RouterModule]
  })

  export class AppRoutingModule{}