//modules
import React from 'react';
import {render, screen,cleanup} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { contact, contacts } from '../../../../../test/jest/__mocks__/testData';
//components
import AddContact from '../AddContact';

describe('Add Contact (Unit)', () => {
  afterEach(() => cleanup());

  const renderAddContact = () => render(<MemoryRouter><AddContact addContact={() => contacts} sameFirstLastNameCheck={() => false} onFormSubmit={() => contact} /></MemoryRouter>);
  const renderEmptyAddContact = () =>render(<MemoryRouter><AddContact canAddContact='false' /></MemoryRouter>);

  describe('render()', () => {
    const { asFragment, } = renderAddContact();
    
    it('AddContact should match snapshot', () => {
      expect(asFragment().firstChild).toMatchSnapshot();
    });  

    it('Should render all form fields', () => {
      renderAddContact();
      expect(screen.getByText('First Name')).toBeInTheDocument();
      expect(screen.getByText('Last Name')).toBeInTheDocument();
      expect(screen.getByText('Email')).toBeInTheDocument();
      expect(screen.getByText('Phone')).toBeInTheDocument();
    });
  });
});
