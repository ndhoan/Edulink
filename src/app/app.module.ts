import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UpComingVideosComponent } from './up-coming-videos/up-coming-videos.component';
import { NewCoursesComponent } from './new-courses/new-courses.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    UpComingVideosComponent,
    NewCoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
