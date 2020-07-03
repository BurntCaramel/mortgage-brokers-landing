import { Component, OnInit, Input } from '@angular/core';
import { AgentData } from '../../api/agents.service';
import {
  MortgageBrokerReviewsData,
  MortgageBrokerReview,
} from '../../api/reviews.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @Input() agentData: null | AgentData;
  @Input() reviewsData: null | MortgageBrokerReviewsData;

  get sortedReviews(): Array<MortgageBrokerReview> {
    // The reviews from the api at the end look better than the start, so reverse them.
    return this.reviewsData?.Result.Results.slice().reverse();
  }

  ngOnInit(): void {}
}
