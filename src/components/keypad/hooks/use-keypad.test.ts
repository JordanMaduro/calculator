import { renderHook } from "@testing-library/react-hooks";
import { useKeypad } from ".";

describe("useKeypad", () => {
  describe("keys", () => {
    it("should default to name", () => {
      const { result } = renderHook(() => useKeypad({}));
      expect(result.current.keys).not.toEqual([]);
    });
  });

  describe("handleClick", () => {
    it("should be defined", () => {
      const { result } = renderHook(() => useKeypad({}));

      expect(result.current.handleClick).toBeDefined();
    });

    it("should be called", () => {
      const ON_INPUT = jest.fn();
      const { result } = renderHook(() => useKeypad({ onInput: ON_INPUT }));
      expect(ON_INPUT).not.toHaveBeenCalled();
      result.current.handleClick({ value: "1", label: "one" })();
      expect(ON_INPUT).toHaveBeenCalled();
    });

    it("should be undefined", () => {
      const { result } = renderHook(() => useKeypad({}));

      const value = result.current.handleClick({ value: "1", label: "one" })();
      expect(value).toBeUndefined();
    });
  });
});
