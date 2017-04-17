import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { TransactionComponent } from './transaction.component';
import { CreateTransactionComponent } from './create-transaction.component';

export const transactionsRoutes: Routes = [
  {
    path: 'transactions',
    component: TransactionComponent,

    children: [
      { path: 'create', component: CreateTransactionComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(transactionsRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class TransactionsRoutes{}
