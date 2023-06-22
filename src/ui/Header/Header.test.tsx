import { render } from '@testing-library/react';
import { Header } from './Header';
import { ShowContext } from '../../App';
import { mockContext } from '../../__mocks__/mockContext';

describe('Header component', () => {
  test('Header renders logo', () => {
    // Act
    const { container } = render(<Header />);

    // Assertions
    expect(container.querySelector('.dreadfulLogo')).toBeTruthy();
  });
  test('Header does not render text input field if no show type is selected', () => {
    // Act
    const { container } = render(<Header />);

    // Assertions
    expect(container.querySelector('.inputFilter')).toBeFalsy();
  });
  test('Header renders text input field if show type is selected', () => {
    // Act
    const { container } = render(
      <ShowContext.Provider value={mockContext}>
        <Header />
      </ShowContext.Provider>
    );

    // Assertions
    expect(container.querySelector('.inputFilter')).toBeTruthy();
  });
});
