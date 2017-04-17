import { Injectable } from '@angular/core';
import { Transaction } from './transaction.model';
import { Account } from '../account/account.model';

@Injectable()
export class TransactionService {
  private _transactions:Array<Transaction> = [
    {id: '1', value: 50, description:'Something', date: new Date(), tags: ['Something'], accountId: 1},
    {id: '2', value: 150, description:'Credit', date: new Date(), tags: ['Something'], accountId: 1},
    {id: '3', value: 570, description:'Billet', date: new Date(), tags: ['bills', 'billet'], accountId: 1}
  ]

  public getByAccount(accountId:number):Promise<Transaction> {
    return new Promise((resolve, reject) => {
      resolve(this._transactions.filter(tran => tran.accountId == accountId));
    });
  }
}

export const TRANSACTION_SERVICE_PROVIDERS:Array<any> = [TransactionService];
