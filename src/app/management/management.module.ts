import { FormNotificationModule } from './../form-notification/form-notification.module';
import { HomepageModule } from './../homepage/homepage.module';
import { TopbarComponent } from './topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RestComponent } from './rest/rest.component';
import { ManagementComponent } from './management.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes= [
  {path: 'management', component: ManagementComponent},
]

@NgModule({
  imports: [
    HomepageModule,
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
      ManagementComponent,
      RestComponent,
      SidebarComponent,
      TopbarComponent,
  ],
  exports: [ TopbarComponent, SidebarComponent]
})
export class ManagementModule { }
