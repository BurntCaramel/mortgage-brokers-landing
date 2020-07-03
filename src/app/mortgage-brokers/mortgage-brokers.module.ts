import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MortgageBrokersRoutingModule } from './mortgage-brokers-routing.module';
import { MortgageBrokersComponent } from './mortgage-brokers.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileRouteComponent } from './profile-route/profile-route.component';
import { ReviewCardComponent } from './review-card/review-card.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MultilinedTextComponent } from './multilined-text/multilined-text.component';
import { ReviewsSpotlightComponent } from './reviews-spotlight/reviews-spotlight.component';
import { ReviewsCarouselComponent } from './reviews-carousel/reviews-carousel.component';

@NgModule({
  declarations: [
    MortgageBrokersComponent,
    ProfileComponent,
    ProfileRouteComponent,
    ReviewCardComponent,
    StarRatingComponent,
    MultilinedTextComponent,
    ReviewsSpotlightComponent,
    ReviewsCarouselComponent,
  ],
  imports: [CommonModule, MortgageBrokersRoutingModule],
  exports: [
    ReviewsSpotlightComponent,
    ReviewsCarouselComponent,
    ReviewCardComponent,
    StarRatingComponent,
  ],
})
export class MortgageBrokersModule {}
