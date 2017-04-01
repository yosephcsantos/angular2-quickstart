import {Account} from './account.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

const textBtnSelect:string = 'Select'

@Component({
  selector: 'accounts-list',
  templateUrl: 'app/account/account_list.component.html',
  styleUrls: ['app/account/account_list.component.css']
})

export class AccountsList {

  //
  // private _selected:Array<boolean> = [false, false]
  //

  // private btnSelectText:Array<string> = [textBtnSelect, textBtnSelect]
  // private resetDataBank(titleEl:any, descEl:any, balEl:any) {
  //   titleEl.value = ''
  //   descEl.value = ''
  //   balEl.value = 0
  // }

  @Input('accounts') _accounts:Array<Account>;
  @Output('delete') delete = new EventEmitter<Number>()

  private _remove(index:number) {
    this.delete.emit(index);
  }
  // private removeAcc(index:number) {
  //   this._accounts.splice(index, 1)
  //   // this._selected.splice(index, 1)
  // }

  // private selected(index:number) {
  //   this._selected[index] = !this._selected[index]
  //
  //   if(this._selected[index])
  //     this.btnSelectText[index] = 'Deselect'
  //   else
  //     this.btnSelectText[index] = textBtnSelect
  // }
}
