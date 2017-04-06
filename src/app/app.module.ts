import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent }  from './account/account.component';
import { HomeComponent } from './home/home.component';
import { AccountsList } from './account/account_list.component';
import { AccountForm } from './account/account_form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, AccountComponent, AccountsList, AccountForm, HomeComponent ],
  schemas:     [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
