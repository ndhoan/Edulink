import { CommercePageModule } from './../commerce-page/commerce-page.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';


const routesConfig: Routes = [
    {path: 'login', component: LoginComponent }
  ]

  @NgModule({
    imports: [
            CommercePageModule,
            RouterModule.forChild(routesConfig),
            CommonModule
      ],
    declarations: [
        LoginComponent,
    ],
  })

  export class LoginModule{}