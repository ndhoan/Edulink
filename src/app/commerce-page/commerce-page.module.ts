import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { CommercePageComponent } from './commerce-page.component'
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../home-page/home-page.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { UpComingVideosComponent } from '../up-coming-videos/up-coming-videos.component';
import { NewCoursesComponent } from '../new-courses/new-courses.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';

const routesConfig: Routes = [
    {path: 'home', component: CommercePageComponent }
  ]

  @NgModule({
    imports: [
          RouterModule.forChild(routesConfig),
          CommonModule
      ],
    declarations: [
        CommercePageComponent,
        HomePageComponent,
        AboutUsComponent,
        UpComingVideosComponent,
        NewCoursesComponent,
        TopMenuComponent
    ],
  })

  export class CommercePageModule{}