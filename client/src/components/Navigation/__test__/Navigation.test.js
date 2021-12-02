//modules
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
// Components
import Navigation from '../Navigation';

describe('Navigation (Unit)', () => {
  afterEach(() => cleanup());
  const renderNavigation = () => render(<MemoryRouter initialEntries={['/']}><Navigation /></MemoryRouter>)
  const renderEmptyNavigation = () => render(<MemoryRouter><Navigation /></MemoryRouter>)

  describe('render Navigation()', () => {
    const { asFragment } = renderNavigation();

    it('Navigation render should match snapshot', () => {
      renderNavigation();
      expect(asFragment()).toMatchSnapshot();
    });
    it('All links should render to the Nav', () => {
      renderNavigation();
      expect(screen.getByText('Address Book')).toBeInTheDocument();
      expect(screen.getByText('Add New Contact')).toBeInTheDocument();
    });
  });
});
