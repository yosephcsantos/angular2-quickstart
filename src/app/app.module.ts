import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccountComponent }  from './account/account.component';
import { HomeComponent } from './home/home.component';
import { AccountsList } from './account/account_list.component';
import { AccountForm } from './account/account_form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AccountRouteModule } from './account/account.routes';
import { ListComponent } from './account/list.component';
import { CreateComponent } from './account/create.component';
import { DetailsComponent } from './account/details.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CreateTransactionComponent } from './transaction/create-transaction.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule,AccountRouteModule ],
  declarations: [ AppComponent, AccountComponent, AccountsList, AccountForm, HomeComponent,
    ListComponent, CreateComponent, DetailsComponent, TransactionComponent, CreateTransactionComponent ],
  schemas:     [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
