import { Component, OnInit, Input } from '@angular/core';
import {
  MortgageBrokerReview,
  MortgageBrokerReviewsData,
} from 'src/app/api/reviews.service';
import { MortgageBrokersRoutingModule } from '../mortgage-brokers-routing.module';

@Component({
  selector: 'app-reviews-carousel',
  templateUrl: './reviews-carousel.component.html',
  styleUrls: ['./reviews-carousel.component.css'],
})
export class ReviewsCarouselComponent implements OnInit {
  @Input() reviews: null | Array<MortgageBrokerReview>;

  offsetIndex: number = 0;

  constructor() {}

  ngOnInit(): void {}

  private get count(): number {
    return this.reviews?.length ?? 0;
  }

  private offsetBy(change: number) {
    const halfCount = Math.round(this.count / 2 - 1.0);
    this.offsetIndex = Math.max(
      -halfCount,
      Math.min(this.offsetIndex + change, halfCount)
    );
  }

  goNext() {
    this.offsetBy(1);
  }

  goPrevious() {
    this.offsetBy(-1);
  }
}
