import { HomepageComponent } from './homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { ManagementComponent } from './management/management.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TopbarComponent } from './management/topbar/topbar.component';
import { SidebarComponent } from './management/sidebar/sidebar.component';
import { RestComponent } from './management/rest/rest.component';
import { NavSidebarComponent } from './nav-sidebar/nav-sidebar.component';
import { FormNotificationComponent } from './nav-sidebar/form-notification/form-notification.component';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
