import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AccountsList } from './account/account_list.component';
import { AccountForm } from './account/account_form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, AccountsList, AccountForm ],
  schemas:     [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
