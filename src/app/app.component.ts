import {Account} from './account/account.model';
import {AccountsList} from './account/account_list.component';
import { AccountForm } from './account/account_form.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  entryComponents: [AccountsList, AccountForm],
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
  private _nextId = 3
  private createAccError:string = ''
  private accLimit:number = 3
  private _accounts:Array<Account> = [
    {
      id:1,
      title:'Bank Pactual',
      description:'this is my main bank',
      balance:5
    },
    new Account( 2, 'Bank ixda', 'secret bank', 2000)
  ]

  private createAcc(newAccount:Account) {
    this.createAccError = ""

    if(this._accounts.length < this.accLimit){
      newAccount.id = this._nextId++;
      this._accounts.push(newAccount);

      this.form.resetForm();
    } else
      this.createAccError = 'Only' + this.accLimit + 'account(s) allowed.'
  }

  private removeAcc(index:number) {
    this._accounts.splice(index, 1)
  }

  @ViewChild(AccountForm) form:AccountForm;
}
