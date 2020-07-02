import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MortgageBrokersRoutingModule } from './mortgage-brokers-routing.module';
import { MortgageBrokersComponent } from './mortgage-brokers.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRouteComponent } from './profile-route/profile-route.component';
import { ReviewCardComponent } from './review-card/review-card.component';


@NgModule({
  declarations: [MortgageBrokersComponent, ProfileComponent, ProfileRouteComponent, ReviewCardComponent],
  imports: [
    CommonModule,
    MortgageBrokersRoutingModule
  ]
})
export class MortgageBrokersModule { }
