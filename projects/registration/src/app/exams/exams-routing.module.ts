import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamRegistrationComponent } from './exam-registration/exam-registration.component';

const routes: Routes = [
  {
    path: 'exam-registration',
    component: ExamRegistrationComponent
  },
  {
    path: '**',
    component: ExamRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamsRoutingModule { }
