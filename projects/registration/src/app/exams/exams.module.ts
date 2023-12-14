import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamsRoutingModule } from './exams-routing.module';
import { ExamRegistrationComponent } from './exam-registration/exam-registration.component';


@NgModule({
  declarations: [
  
    ExamRegistrationComponent
  ],
  imports: [
    CommonModule,
    ExamsRoutingModule
  ]
})
export class ExamsModule { }
