import React from 'react';
import "@testing-library/jest-dom";
import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  test(' title and content', () => {
    const { getByText } = render(
      <Card
        title="Test Title"
        content="Test Content"
        disabled={false}
      />
    );
    expect(getByText('Test Title')).toBeVisible();
    expect(getByText('Test Content')).toBeVisible();
  });

  test('displays the card as disabled', () => {
    const { getByText, container } = render(
      <Card
        title="Test Title"
        content="Test Content"
        disabled={true}
      />
    );
    expect(getByText('Test Title')).toBeVisible();
    expect(container.firstChild).toHaveStyle('opacity: 0.5');
    expect(container.firstChild).toHaveStyle('cursor: not-allowed');
  });
});
