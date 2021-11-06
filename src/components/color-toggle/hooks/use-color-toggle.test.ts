import { act, renderHook } from "@testing-library/react-hooks";
import { useColorToggle } from ".";
import { CalculatorProvider } from "../../calculator/calculator.context";

describe("useColorToggle", () => {
  describe("mode", () => {
    it("should default to false", () => {
      const { result } = renderHook(() => useColorToggle());
      expect(result.current.mode).toBe(false);
    });
  });

  describe("onClick", () => {
    it("should change to true", () => {
      const { result } = renderHook(() => useColorToggle(), {
        wrapper: CalculatorProvider
      });
      expect(result.current.mode).toBe(false);
      act(() => {
        result.current.onClick(true)();
      });
      expect(result.current.mode).toBe(true);
    });
  });
});
