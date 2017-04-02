import { Injectable } from '@angular/core';
import { Account } from './account.model';

@Injectable()
export class AccountService {
  private _accounts:Array<Account> = [
    {
      id:1,
      title:'Bank Pactual',
      description:'this is my main bank',
      balance:5
    },
    new Account( 2, 'Bank ixda', 'secret bank', 2000)
  ]

  private _nextId = 3

  public getAll():Array<Account> {
    return this._accounts;
  }

  public create(newAccount:Account) {
    newAccount.id = this._nextId++;
    this._accounts.push(newAccount);
  }

  public remove(index:number) {
    this._accounts.splice(index, 1);
  }
}
