import { ManagementComponent } from './management/management.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes =[
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'management', component: ManagementComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
