import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { LoginModule } from './login/login.module';
import { HomepageModule } from './homepage/homepage.module';
import { ManagementModule } from './management/management.module';
import { FormNotificationModule } from './management/form-notification/form-notification.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormNotificationModule,
    HomepageModule,
    LoginModule,
    ManagementModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
