import { render, screen } from '@testing-library/react';
import { HomeCard } from './HomeCard';

describe('HomeCard component', () => {
  test('HomeCard component should render title of type of show', () => {
    // Arrange
    const testShow = 'Test show';
    // Act
    const { container } = render(
      <HomeCard
        imageUrl={''}
        footerText={testShow}
        footerImage={''}
        onClick={() => {}}
      />
    );

    // Assertions
    expect(container.querySelector('.background')).toBeTruthy();
    expect(screen.getByText(testShow)).toBeTruthy();
  });
});
