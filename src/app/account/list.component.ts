import { Component } from '@angular/core';
import { Account } from './account.model';
import { AccountService } from './account.service';
import { AccountsList } from './account_list.component';

@Component({
  templateUrl: 'app/account/list.Component.html',
  entryComponents: [AccountsList]
})

export class ListComponent {
  private _accounts:Array<Account>;
  private _accountService:AccountService;

  constructor(accountService:AccountService) {
    this._accountService = accountService;
    var promise = this._accountService.getAll();
    promise.then(accounts => this._accounts = accounts);
  }
}
