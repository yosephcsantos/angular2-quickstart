import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: 'app/transaction/create-transaction.component.html'
})

export class CreateTransactionComponent implements OnInit, OnDestroy {
  private _accountId:number;
  private _paramSub:any;

  constructor(private _route:ActivatedRoute){}

  ngOnInit() {
    this._paramSub = this._route.params.subscribe(params => {
      this._accountId = +params['account'];
    })
  }

  ngOnDestroy() {
    this._paramSub.unsubscribe();
  }
}
