import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewActivitiesComponent } from './view-activities/view-activities.component';

const routes: Routes = [
  {
    path: 'view-activities',
    component: ViewActivitiesComponent
  },
  {
    path: '**',
    component: ViewActivitiesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
