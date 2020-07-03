import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MortgageBrokersComponent } from './mortgage-brokers.component';
import { ProfileRouteComponent } from './profile-route/profile-route.component';
import { JoinComponent } from './join/join.component';

const routes: Routes = [
  { path: '', component: MortgageBrokersComponent, pathMatch: 'full' },
  { path: 'join', component: JoinComponent },
  { path: 'agents/:agentID', component: ProfileRouteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MortgageBrokersRoutingModule {}
