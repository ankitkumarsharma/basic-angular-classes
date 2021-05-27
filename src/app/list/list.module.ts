import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { CustomerComponent } from './customer/customer.component';
import { Cus1Component } from './cus1/cus1.component';
import { Cus2Component } from './cus2/cus2.component';
import { Cus3Component } from './cus3/cus3.component';


@NgModule({
  declarations: [
    ListComponent,
    CustomerComponent,
    Cus1Component,
    Cus2Component,
    Cus3Component
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
