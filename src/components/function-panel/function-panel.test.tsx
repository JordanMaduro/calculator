import FunctionPanel from "./function-panel";
import { render } from "@testing-library/react";
import React from "react";

describe("FunctionPanel", () => {
  it("should render default value", async () => {
    const { container } = render(
      <FunctionPanel>
        <>FunctionPanelLeft</>
        <>FunctionPanelRight</>
      </FunctionPanel>
    );

    expect(container).toHaveTextContent("FunctionPanelLeft");
    expect(container).toHaveTextContent("FunctionPanelRight");
  });
});
