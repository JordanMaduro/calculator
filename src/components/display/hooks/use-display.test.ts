import { renderHook } from "@testing-library/react-hooks";
import { useDisplay } from ".";

describe("useDisplay", () => {
  describe("value", () => {
    it("should default to name", () => {
      const { result } = renderHook(() => useDisplay({}));
      expect(result.current.value).toBe("Display");
    });
  });
});
