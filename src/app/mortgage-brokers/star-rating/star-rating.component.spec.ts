import { render, screen } from '@testing-library/angular';

import { StarRatingComponent } from './star-rating.component';

describe('StarRatingComponent', () => {
  async function subject(props: Partial<StarRatingComponent>) {
    await render(StarRatingComponent, {
      componentProperties: props,
    });
  }

  describe('rating of 3', () => {
    beforeEach(() => subject({ rating: 3 }));

    it('renders 3 images', () => {
      expect(screen.getAllByRole('img').length).toEqual(3);
    });
  });

  describe('rating of 5', () => {
    beforeEach(() => subject({ rating: 5 }));

    it('renders 5 images', () => {
      expect(screen.getAllByRole('img').length).toEqual(5);
    });
  });
});
