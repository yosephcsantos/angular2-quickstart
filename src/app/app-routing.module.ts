import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';

const appRoutes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'accounts', component: AccountComponent }
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
