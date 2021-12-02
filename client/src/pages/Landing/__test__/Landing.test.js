//modules
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { contact, contacts } from '../../../../../test/jest/__mocks__/testData';
//components
import Landing from '../Landing';

describe('Landing (Unit)', () => {
  afterEach(() => cleanup());
  const renderLanding = () =>
    render(
      <MemoryRouter initialEntries={['/']}>
        <Landing
          people={contacts}
          sortPeople={() => contacts}
          setContactToEdit={contact}
          sortType={'first'}
          sortTypeToggle={() => {
            'first';
          }}
        />
      </MemoryRouter>
    );
    const renderLandingNoPeople = () =>
    render(
      <MemoryRouter initialEntries={['/']}>
        <Landing
          people={[]}
          sortPeople={() => contacts}
          setContactToEdit={contact}
          sortType={'first'}
          sortTypeToggle={() => {
            'first';
          }}
        />
      </MemoryRouter>
    );
  const renderEmptyLanding = () =>
    render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );

  describe('render Landing()', () => {
    const { asFragment, container } = renderLanding();

    it('Landing render should match snapshot', () => {
      renderLanding();
      expect(asFragment()).toMatchSnapshot();
    });
    
    it('Landing should render the search bar', () => {
      renderLanding();
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    });
    
    
    it('Should render a message if there are no contacts', () => {
      renderLandingNoPeople()
      expect(screen.getByText('Add a new contact to get started!')).toBeInTheDocument()
    });
    
    it('Should not render the "add new contact" message when there are contacts', () => {
      renderLanding()
      const h4 = screen.queryByText('Add a new contact to get started!')
      expect(h4).not.toBeInTheDocument()
    });
    
  });
});
