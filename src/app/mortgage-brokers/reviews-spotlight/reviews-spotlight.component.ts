import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { flatMap, map } from 'rxjs/operators';
import { ReviewsService } from '../../api/reviews.service';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-reviews-spotlight',
  templateUrl: './reviews-spotlight.component.html',
  styleUrls: ['./reviews-spotlight.component.css'],
})
export class ReviewsSpotlightComponent implements OnChanges {
  constructor(private reviewsAPI: ReviewsService) {}

  @Input() agentID: string;
  private agentID$ = new ReplaySubject<string>();

  reviews$ = this.agentID$.pipe(
    flatMap((agentID) => this.reviewsAPI.getReviewsForMortgageBroker(agentID)),
    map((reviewsData) => reviewsData.Result.Results)
  );

  ngOnChanges(changes: SimpleChanges) {
    if ('agentID' in changes) {
      const agentID = changes['agentID'].currentValue;
      this.agentID$.next(agentID);
    }
  }
}
