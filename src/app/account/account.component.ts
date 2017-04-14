import { Component } from '@angular/core';
import { AccountService, ACCOUNT_SERVICE_PROVIDERS } from './account.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'accounts',
  templateUrl: 'app/account/account.component.html',
  styleUrls: ['app/account/account.component.css'],
  // providers: [AccountService]
  providers: [ ACCOUNT_SERVICE_PROVIDERS ]
})

export class AccountComponent {

}
