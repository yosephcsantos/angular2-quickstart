import { Component, ViewChild } from '@angular/core';
import { Account } from './account.model';
import { AccountService } from './account.service';
import { AccountForm } from './account_form.component';

@Component({
  templateUrl: 'app/account/create.component.html',
  entryComponents: [AccountForm]
})

export class CreateComponent {
  private _accounts:Array<Account>;
  private _accountService:AccountService;

  constructor(accountService:AccountService) {
    this._accountService = accountService;
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
