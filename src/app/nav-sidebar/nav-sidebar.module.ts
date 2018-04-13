import { NavSidebarComponent } from './nav-sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormNotificationComponent } from './form-notification/form-notification.component';

const routes: Routes = [
  {path: 'navsidebar', component: NavSidebarComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    NavSidebarComponent,
    FormNotificationComponent
  ],
  exports: [NavSidebarComponent]
})
export class NavSidebarModule { }
