import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TopmenuComponent } from './homepage/topmenu/topmenu.component';
import { HomeComponent } from './homepage/home/home.component';
import { IntroComponent } from './homepage/intro/intro.component';
import { ServiceComponent } from './homepage/service/service.component';
import { ContactComponent } from './homepage/contact/contact.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { ManagementComponent } from './management/management.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TopmenuComponent,
    HomeComponent,
    IntroComponent,
    ServiceComponent,
    ContactComponent,
    FooterComponent,
    ManagementComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
