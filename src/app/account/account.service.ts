import { Injectable, Optional } from '@angular/core';
import { Account } from './account.model';
import { LoggerService } from '../util/logger.service';

@Injectable()
export class AccountService {

  constructor(@Optional() private _logger:LoggerService) {}

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

    if(this._logger)
      this._logger.log('Account created ' + newAccount.title )

    this._accounts.push(newAccount);
  }

  public remove(index:number) {
    if(this._logger)
      this._logger.log('Account deleted ' + this._accounts[index].title )

    this._accounts.splice(index, 1);
  }
}

export let ACCOUNT_SERVICE_PROVIDERS:Array<any> = [ AccountService, LoggerService ];
