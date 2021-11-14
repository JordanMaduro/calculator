import Display from "./display";
import * as hooks from "./hooks";
import { render } from "@testing-library/react";
import React from "react";

describe("Display", () => {
  it("should render default value", async () => {
    jest.spyOn(hooks, "useDisplay").mockImplementation(() => {
      return {
        value: "",
        subValue: ""
      };
    });

    const { container } = render(<Display text={""} />);
    expect(container).toHaveTextContent("");
  });
  it("should render given value", async () => {
    jest.spyOn(hooks, "useDisplay").mockImplementation(() => {
      return {
        value: "1/4",
        subValue: "1/100"
      };
    });

    const { container } = render(<Display text={""} />);

    expect(container).toHaveTextContent("1/4");
    expect(container).toHaveTextContent("1/100");
  });
});
