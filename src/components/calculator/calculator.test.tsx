import Calculator from "./calculator";
import * as hooks from "./hooks";
import { render } from "@testing-library/react";
import React from "react";

describe("Calculator", () => {
  it("should render default value", async () => {
    jest.spyOn(hooks, "useCalculator").mockImplementation(() => {
      return {
        handleInput: jest.fn(),
        value: "Calculator"
      };
    });

    const { container } = render(<Calculator />);

    expect(container).toHaveTextContent("Calculator");
  });
});
