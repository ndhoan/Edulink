// Login:
import { LoginComponent } from './login/login.component';

// Homepage: 
import { HomepageComponent } from './homepage/homepage.component';

// Angular Cores: 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomepageComponent },
  {path: 'login', component: LoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [

  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
