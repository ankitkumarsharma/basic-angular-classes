import { Cus1Component } from './cus1/cus1.component';
import { CustomerComponent } from './customer/customer.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list.component';
import { Cus2Component } from './cus2/cus2.component';
import { Cus3Component } from './cus3/cus3.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  {path: 'customer',
  children: [
    {path: '', pathMatch:'full', redirectTo:'cus1'},
    {path: 'cus1', component: Cus1Component},
    {path: 'cus2', component: Cus2Component},
    {path: 'cus3', component: Cus3Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
