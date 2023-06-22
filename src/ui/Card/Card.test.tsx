import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card component', () => {
  test('Card renders every property needed', () => {
    // Arrange
    const testTitle = 'Test title';
    const testDescription = 'Test description';
    const testReleaseYear = '2023';
    const testImageUrl = 'testImageUrl';

    // Act
    render(
      <Card
        title={testTitle}
        description={testDescription}
        releaseYear={testReleaseYear}
        imageUrl={testImageUrl}
      />
    );

    // Assertions
    expect(screen.getByText(testTitle)).toBeTruthy();
    expect(screen.getByText(testDescription)).toBeTruthy();
    expect(screen.getByText(testReleaseYear)).toBeTruthy();
  });
});
