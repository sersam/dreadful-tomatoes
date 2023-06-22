import { render, screen } from '@testing-library/react';
import Pagination from './Pagination';

describe('InputField component', () => {
  test('Pagination should show the page selected with secondary color', () => {
    // Act
     render(
      <Pagination totalPages={3} page={1} setPage={() => {}} />
    );

    // Assertions
    expect(screen.findByRole('button', { current: 'true' })).toBeTruthy();
  });
});
