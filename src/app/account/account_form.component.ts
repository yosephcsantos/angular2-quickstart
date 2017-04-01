import {Account} from './account.model';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'account-form',
  templateUrl: 'app/account/account_form.component.html',
  styleUrls: ['app/account/account_form.component.css']
})

export class AccountForm {

  @Output() created = new EventEmitter<Account>();

  private createAcc(titleEl:any, descEl:any, balEl:any) {
    var newAccount:Account = new Account(0, titleEl.value, descEl.value, balEl.value);
    this.created.emit(newAccount);

    this.resetDataBank(titleEl, descEl, balEl);
  }

  private resetDataBank(titleEl:any, descEl:any, balEl:any) {
    titleEl.value = ''
    descEl.value = ''
    balEl.value = 0
  }

}
