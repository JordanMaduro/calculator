import { renderHook } from "@testing-library/react-hooks";
import { useKeypad } from ".";

describe("useKeypad", () => {
  describe("keys", () => {
    it("should default to name", () => {
      const { result } = renderHook(() => useKeypad());
      expect(result.current.keys).not.toEqual([]);
    });
  });
  describe("handleClick", () => {
    it("should be defined", () => {
      const { result } = renderHook(() => useKeypad());

      expect(result.current.handleClick).toBeDefined();
    });
  });
});
