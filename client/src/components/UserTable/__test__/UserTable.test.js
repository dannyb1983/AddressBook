//modules
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"
import { contact, contacts } from "../../../../../test/jest/__mocks__/testData"
//components
import UserTable from "../UserTable";

describe('User Table (Unit)', () => {
    const renderUserTable = () => render(<MemoryRouter><UserTable people={contacts} setContactToEdit={contact} searchInput="" /></MemoryRouter>)
    const renderEmptyUserTable = () => render(<MemoryRouter><UserTable /></MemoryRouter>)

    describe('render()', () => {
        const { asFragment } = renderUserTable();
        test('should match snapshot', () => {
            expect(asFragment()).toMatchSnapshot();
        });
    });
});
