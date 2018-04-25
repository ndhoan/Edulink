import { ManagementModule } from './management/management.module';
import { LoginModule } from './login/login.module';
import { HomepageModule } from './homepage/homepage.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[]

@NgModule({
  imports: [
    HomepageModule,
    LoginModule,
    ManagementModule,
    // SidebarModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],  
  declarations:[

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
