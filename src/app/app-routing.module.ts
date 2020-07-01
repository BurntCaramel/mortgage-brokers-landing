import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mortgage-brokers' },
  { path: 'mortgage-brokers', loadChildren: () => import('./mortgage-brokers/mortgage-brokers.module').then(m => m.MortgageBrokersModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
