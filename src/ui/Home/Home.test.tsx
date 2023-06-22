import { render } from '@testing-library/react';
import { Home } from './Home';

describe('Home component', () => {
  test('Home component should render types of shows', () => {
    // Act
    const { container } = render(<Home />);

    // Assertions
    expect(container.querySelector('.home')).toBeTruthy();
    expect(container.querySelector('.background')).toBeTruthy();
  });
});
