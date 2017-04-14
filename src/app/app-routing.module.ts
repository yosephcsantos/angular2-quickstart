import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { accountsRoutes as AccountRoutes } from './account/account.routes';

const appRoutes: Routes = [
  { path:'', component: HomeComponent },
  ...AccountRoutes
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}
