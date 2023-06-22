import { render, screen } from '@testing-library/react';
import { HeaderShowSelector } from './HeaderShowSelector';

describe('HeaderShowSelector component', () => {
  test('HeaderShowSelector should show the show type indicated on props', () => {
    // Arrange
    const testShowTitle = 'Test show';

    // Act
    render(
      <HeaderShowSelector
        image={''}
        text={testShowTitle}
        selected={false}
        onClick={() => {}}
      />
    );

    // Assertions
    expect(screen.getByText(testShowTitle)).toBeTruthy();
  });
  test('HeaderShowSelector should have specific classname if selected', () => {
    // Arrange
    const testShowTitle = 'Test show';

    // Act
    const { container } = render(
      <HeaderShowSelector
        image={''}
        text={testShowTitle}
        selected
        onClick={() => {}}
      />
    );

    // Assertions
    expect(container.querySelector('.showTypeSelected')).toBeTruthy();
  });
});
