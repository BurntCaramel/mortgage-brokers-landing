import { Component, OnInit, Input } from '@angular/core';
import { AgentData } from '../../api/agents.service';
import { MortgageBrokerReviews } from '../../api/reviews.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() agentData: null | AgentData;
  @Input() reviewsData: null | MortgageBrokerReviews;

  ngOnInit(): void {}
}
