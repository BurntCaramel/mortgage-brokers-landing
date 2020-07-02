import { render, screen } from '@testing-library/angular';

import { ReviewCardComponent } from './review-card.component';

describe('ReviewCardComponent', () => {
  async function subject() {
    await render(ReviewCardComponent, {
      componentProperties: {
        title: 'Some title',
        description: 'Some description',
        coverImage: 'https://example.org/cover-image.jpg',
      },
    });
  }

  beforeEach(subject);

  it('renders title', () => {
    expect(screen.getByText('Some title')).toBeDefined();
  });

  it('renders description', () => {
    expect(screen.getByText('Some description')).toBeDefined();
  });

  it('renders cover image', () => {
    expect(
      screen.getByRole('img', { name: 'Photo of property' })
    ).toBeDefined();
  });
});
