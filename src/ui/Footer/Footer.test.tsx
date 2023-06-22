import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer component', () => {
  test('Footer renders logo', () => {
    // Act
    const { container } = render(<Footer />);

    // Assertions
    expect(container.querySelector('.logo')).toBeTruthy();
  });
  test('Footer renders download buttons', () => {
    // Act
    const { getByAltText } = render(<Footer />);

    // Assertions
    expect(getByAltText('App store logo')).toBeTruthy();
    expect(getByAltText('Google play logo')).toBeTruthy();
  });
  test('Footer renders Copyright text', () => {
    // Arrange
    const copyrightText =
      'Copyright 2022 Dreadful Cherrys Tomatoes. All rights reserved.';

    // Act
    render(<Footer />);

    // Assertions
    expect(screen.getByText(copyrightText)).toBeTruthy();
  });
});
