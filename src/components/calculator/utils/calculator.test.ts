import { KeyTypes } from "../../keypad/keypad.typing";
import {
  availableFunctions,
  isAvailableFunction,
  processInput
} from "./calculator";

describe("calculator", () => {
  describe("isAvailableFunction", () => {
    it("should be true", () => {
      expect(isAvailableFunction("C")).toBe(true);
    });
    it("should be false", () => {
      expect(isAvailableFunction("NOT")).toBe(false);
    });
  });
  describe("Available functions", () => {
    it("should evaluate", () => {
      expect(availableFunctions["="]("1+1")).toBe(2);
    });
    it("should return empty string", () => {
      expect(availableFunctions["C"]("1+2")).toBe("");
    });
    it("should return empty string", () => {
      expect(availableFunctions["AC"]("1+2")).toBe("1+");
    });
  });
  describe("processInput", () => {
    it("should append", () => {
      expect(processInput("", { value: "2", label: "two" })).toBe("2");
    });
    it("should append to existing", () => {
      expect(processInput("3+", { value: "2", label: "two" })).toBe("3+2");
    });
    describe("isFunction", () => {
      it("should return empty string", () => {
        expect(
          processInput("3+", {
            value: "C",
            type: KeyTypes.FUNCTION,
            label: "two"
          })
        ).toBe("");
      });
      it("should return null", () => {
        expect(
          processInput("3+", {
            value: "DOES_NOT_EXIST",
            type: KeyTypes.FUNCTION,
            label: "two"
          })
        ).toBe(null);
      });
    });
  });
});
