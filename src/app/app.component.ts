import {Account} from './account/account.model';
import {AccountsList} from './account/account_list.component';
import { AccountForm } from './account/account_form.component';
import { Component, ViewChild, ViewChildren, QueryList, Injector } from '@angular/core';
import { AccountService, ACCOUNT_SERVICE_PROVIDERS } from './account/account.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  entryComponents: [AccountsList, AccountForm],
  styleUrls: ['app/app.component.css'],
  // providers: [AccountService]
  providers: [ ACCOUNT_SERVICE_PROVIDERS ]
})

export class AppComponent {
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
