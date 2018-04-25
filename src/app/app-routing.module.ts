// Management Page:
import { ManagementComponent } from './management/management.component';
import { FormNotificationComponent } from './management/form-notification/form-notification.component';

//Login :
import { LoginComponent } from './login/login.component';

//Homepage : 
import { HomepageComponent } from './homepage/homepage.component';

//Angular Cores : 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes =[
  {path: '', component: HomepageComponent },
  {path: 'login', component: LoginComponent},
  {
    path: 'management', 
    component: ManagementComponent, 
    children: [
      { 
        path: 'notification', 
        component: FormNotificationComponent
      }
    ]
  },
]

@NgModule({
  imports: [
    // SidebarModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],  
  declarations:[

  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
