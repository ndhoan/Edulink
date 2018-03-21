import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PricePageComponent } from './price-page.component'
import { CommonModule } from '@angular/common';
import { CommercePageModule } from '../commerce-page/commerce-page.module'


const routesConfig: Routes = [
    {path: 'price', component: PricePageComponent,  data: { animation: 'price' }  }
  ]

  @NgModule({
    imports: [
            CommercePageModule,
            RouterModule.forChild(routesConfig),
            CommonModule
      ],
    declarations: [
        PricePageComponent
    ],
  })

  export class PricePageModule{}