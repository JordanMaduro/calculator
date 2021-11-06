import ColorToggle from "./color-toggle";
import * as hooks from "./hooks";
import { render } from "@testing-library/react";
import React from "react";

describe("ColorToggle", () => {
  it("should render", async () => {
    jest.spyOn(hooks, "useColorToggle").mockImplementation(() => {
      return {
        mode: false,
        onClick: jest.fn()
      };
    });

    const { container } = render(<ColorToggle />);

    expect(container).toBeInTheDocument();
  });
});
