import { HomepageModule } from './../homepage/homepage.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
]

@NgModule({
  imports: [
    HomepageModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    LoginComponent,
  ]
})
export class LoginModule { }
