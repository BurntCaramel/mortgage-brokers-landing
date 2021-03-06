import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APIModule } from './api/api.module';
import { MortgageBrokersModule } from './mortgage-brokers/mortgage-brokers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    APIModule,
    MortgageBrokersModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
