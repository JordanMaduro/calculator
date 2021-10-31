import { renderHook } from "@testing-library/react-hooks";
import { useDisplay } from ".";

describe("useDisplay", () => {
  describe("value", () => {
    it("should default to empty string", () => {
      const { result } = renderHook(() => useDisplay({}));
      expect(result.current.value).toBe("");
    });
    it("should default to empty string", () => {
      const { result } = renderHook(() => useDisplay({ text: "123" }));
      expect(result.current.value).toBe("123");
    });
  });
  describe("subValue", () => {
    it("should default to empty string", () => {
      const { result } = renderHook(() => useDisplay({ text: "123" }));
      expect(result.current.subValue).toBe("");
    });
    it("should default to empty string", () => {
      const { result } = renderHook(() =>
        useDisplay({ text: "", subText: "123" })
      );
      expect(result.current.subValue).toBe("123");
    });
  });
});
