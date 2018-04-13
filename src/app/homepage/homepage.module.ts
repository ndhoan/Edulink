import { TopmenuComponent } from './topmenu/topmenu.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { HomepageComponent } from './homepage.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from './intro/intro.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomepageComponent }
]

@NgModule({
  imports: [ 
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    HomepageComponent,
    HomeComponent,
    TopmenuComponent,
    IntroComponent,
    ServiceComponent,
    ContactComponent,
    FooterComponent
  ],
  exports:[ TopmenuComponent, FooterComponent ]
})
export class HomepageModule { }
