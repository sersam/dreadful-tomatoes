import { render, screen, waitFor, act } from '@testing-library/react';
import { ShowDetails } from './ShowDetails';
import { exampleData } from '../../__mocks__/data-generator';
import { ShowContext } from '../../App';
import { mockContext } from '../../__mocks__/mockContext';

describe('ShowDetails component', () => {
  let originFetch;
  beforeEach(() => {
    originFetch = (global as any).fetch;
  });
  afterEach(() => {
    (global as any).fetch = originFetch;
  });
  test('ShowDetails component is rendered', () => {
    // Act
    const { container } = render(<ShowDetails />);
    // Assertions
    expect(container.querySelector('.showDetails')).toBeTruthy();
  });
  test('Pagination component is rendered', () => {
    // Act
    const { container } = render(<ShowDetails />);
    // Assertions
    expect(container.querySelector('.MuiPagination-root')).toBeTruthy();
  });
  test('ShowDetails component should render only 10 movies.', async () => {
    // Arrange
    const fakeResponse = exampleData;
    const mRes = { json: jest.fn().mockResolvedValueOnce(fakeResponse) };
    const mockedFetch = jest.fn().mockResolvedValueOnce(mRes as any);
    (global as any).fetch = mockedFetch;
    // Act
    await act(async () => {
      render(
        <ShowContext.Provider value={mockContext}>
          <ShowDetails />
        </ShowContext.Provider>
      );
    });

    // Assertions
    const numberOfShows = await waitFor(
      () => document.querySelectorAll('.background').length
    );
    expect(numberOfShows).toBe(10);
  });
});
