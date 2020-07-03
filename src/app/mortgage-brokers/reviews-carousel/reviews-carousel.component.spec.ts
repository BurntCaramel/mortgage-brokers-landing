import { render, screen } from '@testing-library/angular';

import { ReviewsCarouselComponent } from './reviews-carousel.component';

import { buildMany } from '../../api/fixtures/helpers';
import { buildReview } from '../../api/fixtures/reviews';
import { ReviewCardComponent } from '../review-card/review-card.component';

describe('ReviewsCarouselComponent', () => {
  async function subject(props: Partial<ReviewsCarouselComponent>) {
    await render(ReviewsCarouselComponent, {
      declarations: [ReviewCardComponent],
      componentProperties: props,
    });
  }

  describe('no reviews', () => {
    beforeEach(() => subject({ reviews: [] }));

    it('renders no articles', () => {
      expect(screen.queryAllByRole('article').length).toEqual(0);
    });
  });

  describe('3 reviews', () => {
    beforeEach(() => subject({ reviews: buildMany(3, buildReview) }));

    it('renders 3 articles', () => {
      expect(screen.getAllByRole('article').length).toEqual(3);
    });
  });
});
