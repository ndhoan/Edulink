import { HomepageModule } from './../homepage/homepage.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    HomepageModule,
    CommonModule
  ],
  declarations: [
    LoginComponent,
  ]
})
export class LoginModule { }
