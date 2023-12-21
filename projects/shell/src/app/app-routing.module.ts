import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { loadRemoteModule } from '@angular-architects/native-federation';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'activities',
    loadChildren: () => loadRemoteModule('activities', './Module').then((m) => m.ActivitiesModule)
  },
  {
    path: 'profile',
    loadChildren: () => loadRemoteModule('profile', './Module').then((m) => m.ProfileModule)
  }, 
  {
    path: 'registration', //Using loadChildren per error message given when using loadComponent
    loadChildren: () => loadRemoteModule('registration', './Module').then((m) => m.RegistrationModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  //No routes after '**', that has to be the last one.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
