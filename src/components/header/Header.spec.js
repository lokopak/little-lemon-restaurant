import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Header", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  test("header: renders logo correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByAltText("Little Lemon")).toBeInTheDocument();
  });

  test("header: renders nav correctly", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
});
