import { renderHook } from "@testing-library/react-hooks";
import { useCalculator } from ".";

describe("useCalculator", () => {
  describe("value", () => {
    it("should default to name", () => {
      const { result } = renderHook(() => useCalculator());
      expect(result.current.value).toBe("");
    });
  });
});
