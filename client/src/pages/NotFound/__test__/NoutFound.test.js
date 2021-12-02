//modules
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
//components
import NotFound from "../NotFound";

describe("NotFound (Unit)", () => {
  afterEach(() => cleanup());
  const renderNotFound = () =>
    render(
      <MemoryRouter initialEntries={["/blah"]}>
        <NotFound />
      </MemoryRouter>
    );
  const renderNotFoundBadAddress = () =>
    render(
      <MemoryRouter initialEntries={["/addcontacts"]}>
        <NotFound />
      </MemoryRouter>
    );

  describe("render NotFound()", () => {
    const { asFragment, container } = renderNotFound();

    it("NotFound render should match snapshot", () => {
      renderNotFound();
      expect(asFragment()).toMatchSnapshot();
    });

    it("NotFound message should render at an improper page address", () => {
      renderNotFound();
      expect(screen.getByText("Oops! Page Not Found")).toBeInTheDocument();
    });
  });
});
