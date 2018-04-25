import { PricePageComponent } from './price-page/price-page.component';
import { CommercePageComponent } from './commerce-page/commerce-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { StudentManagementComponent } from './student-management/student-management.component';
import { LoginComponent } from './login/login.component';
import { FormNotificationComponent } from './form-notification/form-notification.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentManagementTopbarComponent } from './student-management-topbar/student-management-topbar.component';
import { StudentManagementSidebarComponent } from './student-management-sidebar/student-management-sidebar.component';
import { StudentManagementCenterComponent } from './student-management-center/student-management-center.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }  
  