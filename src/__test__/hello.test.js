import React from "react";
import { render } from "react-testing-library";
import Hello from "../hello";

describe("Hello", () => {
  it("Renders without error", () => {
    render(<Hello />);
  });
});
