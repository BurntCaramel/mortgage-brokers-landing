import { render, screen } from '@testing-library/angular';

import { ReviewsSpotlightComponent } from './reviews-spotlight.component';
import { buildMany } from '../../api/fixtures/helpers';
import { buildReview } from '../../api/fixtures/reviews';
import { ReviewCardComponent } from '../review-card/review-card.component';

describe('ReviewsSpotlightComponent', () => {
  async function subject(props: Partial<ReviewsSpotlightComponent>) {
    await render(ReviewsSpotlightComponent, {
      declarations: [ReviewCardComponent],
      componentProperties: props,
    });
  }

  // describe('3 reviews', () => {
  //   beforeEach(() => subject({ reviews: buildMany(3, buildReview) }));

  //   it('renders 3 articles', () => {
  //     expect(screen.getAllByRole('article').length).toEqual(3);
  //   });
  // });
});
