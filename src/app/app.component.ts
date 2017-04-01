import {Component} from '@angular/core';
import {Account} from './account.model';

const textBtnSelect:string = 'Select'

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})

export class AppComponent {
  private _accounts:Array<Account> = [
    {
      id:1,
      title:'Bank Pactual',
      description:'this is my main bank',
      balance:5
    },
    new Account( 2, 'Bank ixda', 'secret bank', 2000)
  ]

  private _selected:Array<boolean> = [false, false]

  private _nextId = 3
  private btnSelectText:Array<string> = [textBtnSelect, textBtnSelect]
  private resetDataBank(titleEl:any, descEl:any, balEl:any) {
    titleEl.value = ''
    descEl.value = ''
    balEl.value = 0
  }

  private createAcc(titleEl:any, descEl:any, balEl:any) {
    this._accounts.push(new Account(this._nextId, titleEl.value, descEl.value, balEl.value))
    this._selected.push(false);
    this._nextId++

    this.resetDataBank(titleEl, descEl, balEl);
  }

  private removeAcc(index:number) {
    this._accounts.splice(index, 1)
    this._selected.splice(index, 1)
  }

  private selected(index:number) {
    this._selected[index] = !this._selected[index]

    if(this._selected[index])
      this.btnSelectText[index] = 'Deselect'
    else
      this.btnSelectText[index] = textBtnSelect
  }
}
