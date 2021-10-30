import Keypad from "./keypad";
import * as hooks from "./hooks";
import { render } from "@testing-library/react";
import React from "react";

describe("Keypad", () => {
  it("should render provided keys", async () => {
    jest.spyOn(hooks, "useKeypad").mockImplementation(() => {
      return {
        handleClick: jest.fn(),
        keys: [
          {
            value: "1",
            label: "ONE"
          },
          {
            value: "2",
            label: "TWO"
          }
        ]
      };
    });

    const { container } = render(<Keypad />);

    expect(container).toHaveTextContent("ONE");
    expect(container).toHaveTextContent("TWO");
  });
});
