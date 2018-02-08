import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login.component'
import { CommonModule } from '@angular/common';


const routesConfig: Routes = [
    {path: 'login', component: LoginComponent }
  ]

  @NgModule({
    imports: [
            RouterModule.forChild(routesConfig),
            CommonModule
      ],
    declarations: [
        LoginComponent,
    ],
  })

  export class LoginModule{}