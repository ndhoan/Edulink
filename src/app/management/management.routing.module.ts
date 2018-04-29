import { TopbarComponent } from './topbar/topbar.component';
// Management Page:
import { ManagementComponent } from './management.component';
import { FormNotificationComponent } from './form-notification/form-notification.component';

// Angular Cores:
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RestComponent } from './rest/rest.component';

const managementRoutes: Routes = [
  {
    path: 'management',
    component: ManagementComponent,
    children: [
      {
        path: 'notification',
        component: FormNotificationComponent
      },
      {
        path: '',
        component: RestComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(managementRoutes)
  ],
  declarations: [

  ],
  exports: [RouterModule]
})

export class ManagementRoutingModule { }
