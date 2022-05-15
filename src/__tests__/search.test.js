import React from 'react';
import { render, screen } from '../test/app-test-utils';
import Search from '../components/search';

const testProps = {
  error: new Error(''),
  location: 'Test Location',
  onLocationChange: () => {},
  isSearching: false,
};

describe('Search', () => {
  test('renders a search box above the weather card', async () => {
    renderSearch();

    expect(screen.getByRole('search')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/search for a location/i),
    ).toBeInTheDocument();
  });
});

function renderSearch() {
  render(<Search {...testProps} />);
}
