import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { ExamRegistrationComponent } from './exam-registration/exam-registration.component';


@NgModule({
  declarations: [
    ExamRegistrationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
