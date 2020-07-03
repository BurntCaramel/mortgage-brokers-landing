import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mortgage-brokers',
  templateUrl: './mortgage-brokers.component.html',
  styleUrls: ['./mortgage-brokers.component.css'],
})
export class MortgageBrokersComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  agentCode$ = this.route.queryParamMap.pipe(
    map((params) => params.get('agentCode'))
  );

  agentProfileURL$ = this.agentCode$.pipe(
    map((agentCode) => `/mortgage-brokers/agents/${agentCode}`)
  );

  get bookURL(): string {
    return 'https://calendly.com/ratemyagent-for-mortgage-brokers-experts/booking?month=2020-07';
  }

  ngOnInit(): void {}
}
