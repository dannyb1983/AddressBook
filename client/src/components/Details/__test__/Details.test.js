//modules
import React from 'react';
import { render, screen, cleanup} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { contact, contacts } from '../../../../../test/jest/__mocks__/testData';
//components
import Details from '../Details';

describe('Details (Unit)', () => {
  afterEach(() => cleanup());
  const renderDetails = () => render(<MemoryRouter initialEntries={['/details']}><Details emptyName={true} people={contacts} contactToEdit={contact} deleteContact={()=>people.pop()} sortPeople={()=>people} sortType={'first'} sameFirstLastNameCheck={false} /></MemoryRouter>)
  const renderEmptyDetails = () => render(<MemoryRouter><Details emptyName={true} /></MemoryRouter>)

  describe('render()', () => {
    const { asFragment, container, } = renderDetails();

    it('render should match snapshot', () => {
        renderDetails()
      expect(asFragment().firstChild).toMatchSnapshot();
    });
    it('should render h1', () => {
      renderDetails()
      expect(screen.getByRole('heading',{name:'Contact Details'})).toBeInTheDocument();
    });
    it('Should not render a warning message ', () => {
      renderDetails()
      const nofirstOrLastName = screen.queryByText('**Contacts must contain a first AND last name')
      expect(nofirstOrLastName).not.toBeInTheDocument()
    });
    
  });
});
