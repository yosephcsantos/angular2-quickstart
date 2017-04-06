import {Account} from './account.model';
import {AccountsList} from './account_list.component';
import { AccountForm } from './account_form.component';
import { Component, ViewChild, ViewChildren, QueryList, Injector } from '@angular/core';
import { AccountService, ACCOUNT_SERVICE_PROVIDERS } from './account.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'accounts',
  templateUrl: 'app/account/account.component.html',
  entryComponents: [AccountsList, AccountForm],
  styleUrls: ['app/account/account.component.css'],
  // providers: [AccountService]
  providers: [ ACCOUNT_SERVICE_PROVIDERS ]
})

export class AccountComponent {
  private _accounts:Array<Account>;
  private _accountService:AccountService;

  constructor(accountService:AccountService) {
    this._accountService = accountService;
    var promise = this._accountService.getAll();
    promise.then(accounts => this._accounts = accounts);
  }

  private createAccError:string = '';

  private createAcc(newAccount:Account) {
    this._accountService.create(newAccount)
    .then(account => {
      console.log(account);
      this.createAccError = ""
      this.form.resetForm();
    })
    .catch(err => this.createAccError = err);
  }

  private removeAcc(index:number) {
    this._accountService.remove(index);
  }

  @ViewChild(AccountForm) form:AccountForm;
}
