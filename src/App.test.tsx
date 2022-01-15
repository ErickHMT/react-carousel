import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders heading element", () => {
  render(<App />);
  const headingElement = screen.getByRole("heading", {
    name: /first block/i,
  });
  expect(headingElement).toBeInTheDocument();
});
