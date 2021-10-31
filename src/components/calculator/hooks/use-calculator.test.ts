import { renderHook, act } from "@testing-library/react-hooks";
import { useCalculator } from ".";
import { KeyTypes } from "../../keypad/hooks/use-keypad";

describe("useCalculator", () => {
  describe("value", () => {
    it("should default to name", () => {
      const { result } = renderHook(() => useCalculator());
      expect(result.current.value).toBe("");
    });
  });
  describe("previousValue", () => {
    it("should default to name", () => {
      const { result } = renderHook(() => useCalculator());
      expect(result.current.previousValue).toBe("");
    });
  });
  describe("handleInput", () => {
    it("should default to append", () => {
      const { result } = renderHook(() => useCalculator());
      expect(result.current.handleInput).toBeDefined();
      expect(result.current.value).toBe("");
      act(() => {
        result.current.handleInput({
          value: "5",
          label: "Five"
        });
      });
      expect(result.current.value).toBe("5");
    });
    it("should default to append", () => {
      const { result } = renderHook(() => useCalculator());
      expect(result.current.handleInput).toBeDefined();
      expect(result.current.value).toBe("");
      act(() => {
        result.current.handleInput({
          value: "DOES_NOT_EXIST",
          label: "DOES_NOT_EXIST",
          type: KeyTypes.FUNCTION
        });
      });
      expect(result.current.value).toBe("");
    });
    it("should clear", () => {
      const { result } = renderHook(() => useCalculator());
      expect(result.current.handleInput).toBeDefined();
      expect(result.current.previousValue).toBe("");
      act(() => {
        result.current.handleInput({
          value: "5",
          label: "Five"
        });
      });
      act(() => {
        result.current.handleInput({
          value: "=",
          label: "Enter",
          type: KeyTypes.FUNCTION
        });
      });
      expect(result.current.previousValue).toBe("5");

      act(() => {
        result.current.handleInput({
          value: "C",
          label: "Clear",
          type: KeyTypes.FUNCTION
        });
      });

      expect(result.current.previousValue).toBe("");
    });
  });
});
