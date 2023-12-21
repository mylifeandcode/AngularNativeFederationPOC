import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ViewActivitiesComponent } from '../activities/view-activities/view-activities.component';


@NgModule({
  declarations: [
    ViewActivitiesComponent
  ],
  imports: [
    CommonModule,
    ActivitiesRoutingModule
  ]
})
export class ActivitiesModule { }
