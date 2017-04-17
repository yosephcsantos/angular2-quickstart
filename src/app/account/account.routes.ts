import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AccountComponent } from './account.component';
import { ListComponent } from './list.component';
import { CreateComponent } from './create.component';
import { DetailsComponent } from './details.component';

export const accountsRoutes: Routes = [
  {
    path: 'accounts',
    component: AccountComponent,

    children: [
      { path: 'list', component: ListComponent },
      { path: 'create', component: CreateComponent },
      { path: ':id', component: DetailsComponent },
      { path: '', redirectTo: 'list',  pathMatch: 'full'}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(accountsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AccountRouteModule{}
