import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders learn react link", () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
});
