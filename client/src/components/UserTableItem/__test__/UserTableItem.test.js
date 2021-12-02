//modules
import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"
import { contact, contacts } from "../../../../../test/jest/__mocks__/testData"
//components
import UserTableItem from "../UserTableItem";

describe('User Table Item (Unit)', () => {
    const renderUserTableItem = () => render(<MemoryRouter><UserTableItem people={contacts} setContactToEdit={contact} searchInput="" /></MemoryRouter>)
    const renderEmptyUserTableItem = () => render(<MemoryRouter><UserTableItem /></MemoryRouter>)

    describe('render()', () => {
        const { asFragment } = renderUserTableItem();
        it('should match snapshot', () => {
            expect(asFragment()).toMatchSnapshot();
        });
    });
    
    describe('User Table edge cases + undefined values', () => {
        it('should render an error message when given no input values', () => {
            renderEmptyUserTableItem()
            expect(screen.getByText("Searching for users...")).toBeInTheDocument();
        });
    });
});