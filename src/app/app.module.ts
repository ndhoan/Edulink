import { PricePageComponent } from './price-page/price-page.component';
import { CommercePageComponent } from './commerce-page/commerce-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { StudentManagementComponent } from './student-management/student-management.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  