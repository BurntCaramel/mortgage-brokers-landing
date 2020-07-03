import { render } from '@testing-library/angular';

import { MultilinedTextComponent } from './multilined-text.component';

describe('MultilinedTextComponent', () => {
  async function subject(props: Partial<MultilinedTextComponent>) {
    return await render(MultilinedTextComponent, {
      componentProperties: props,
    });
  }

  describe('single line', () => {
    it('renders 1 paragraph', async () => {
      const { container } = await subject({ text: 'some text' });
      expect(container.childElementCount).toEqual(1);
    });
  });

  describe('3 lines', () => {
    it('renders 3 paragraphs', async () => {
      const { container } = await subject({ text: 'first\n\nsecond\n\nthird' });
      expect(container.childElementCount).toEqual(3);
    });
  });

  describe('single newlines', () => {
    it('it ignores single newlines', async () => {
      const { container } = await subject({ text: 'first\nsecond' });
      expect(container.childElementCount).toEqual(1);
    });
  });
});
