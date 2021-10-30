import Display from "./display";
import * as hooks from "./hooks";
import { render } from "@testing-library/react";
import React from "react";

describe("Display", () => {
  it("should render default value", async () => {
    jest.spyOn(hooks, "useDisplay").mockImplementation(() => {
      return {
        value: "Display",
      };
    });

    const { container } = render(<Display />);

    expect(container).toHaveTextContent("Display");
  });
});
