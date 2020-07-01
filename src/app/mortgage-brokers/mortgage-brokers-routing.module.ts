import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MortgageBrokersComponent } from './mortgage-brokers.component';

const routes: Routes = [{ path: '', component: MortgageBrokersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MortgageBrokersRoutingModule { }
