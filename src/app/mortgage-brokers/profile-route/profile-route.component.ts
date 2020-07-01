import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { AgentsService } from 'src/app/api/agents.service';
import { ReviewsService } from 'src/app/api/reviews.service';

@Component({
  selector: 'app-profile-route',
  templateUrl: './profile-route.component.html',
  styleUrls: ['./profile-route.component.css']
})
export class ProfileRouteComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private agentsAPI: AgentsService,
    private reviewsAPI: ReviewsService
  ) {}

  agentData$ = this.route.paramMap.pipe(
    flatMap((params) => this.agentsAPI.getAgent(params.get('agentID')))
  );

  reviewsData$ = this.route.paramMap.pipe(
    flatMap((params) => this.reviewsAPI.getReviewsForMortgageBroker(params.get('agentID')))
  );

  ngOnInit(): void {}
}
