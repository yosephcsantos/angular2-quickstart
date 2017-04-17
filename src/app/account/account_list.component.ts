import {Account} from './account.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

const textBtnSelect:string = 'Select'

@Component({
  selector: 'accounts-list',
  templateUrl: 'app/account/account_list.component.html',
  styleUrls: ['app/account/account_list.component.css']
})

export class AccountsList {

  @Input('accounts') _accounts:Array<Account>;
  @Output('delete') delete = new EventEmitter<Number>()

  private _remove(index:number) {
    this.delete.emit(index);
  }

  @Output() details =  new EventEmitter<Account>();

  private _showDetails(account:Account) {
    this.details.emit(account);
  }
}
