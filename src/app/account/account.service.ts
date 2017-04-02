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
}
