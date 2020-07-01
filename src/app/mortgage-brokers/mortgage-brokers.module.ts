import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MortgageBrokersRoutingModule } from './mortgage-brokers-routing.module';
import { MortgageBrokersComponent } from './mortgage-brokers.component';


@NgModule({
  declarations: [MortgageBrokersComponent],
  imports: [
    CommonModule,
    MortgageBrokersRoutingModule
  ]
})
export class MortgageBrokersModule { }
