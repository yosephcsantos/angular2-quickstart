import {Account} from './account/account.model';
import {AccountsList} from './account/account_list.component';
import { AccountForm } from './account/account_form.component';
import { Component, ViewChild, ViewChildren, QueryList, Injector } from '@angular/core';
import { AccountService } from './account/account.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  entryComponents: [AccountsList, AccountForm],
  styleUrls: ['app/app.component.css'],
  providers: [AccountService]
})

export class AppComponent {
  private _accounts:Array<Account>;
  private _accountService:AccountService;

  constructor(accountService:AccountService) {
    this._accountService = accountService;
    this._accounts = this._accountService.getAll();
  }

  private createAccError:string = '';

  @ViewChild(AccountForm) form:AccountForm;
  private createAcc(newAccount:Account) {
    this._accountService.create(newAccount);
    this.form.resetForm();
  }

  private removeAcc(index:number) {
    this._accountService.remove(index);
  }
}
