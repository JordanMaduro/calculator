import { execKey, isAvailableKey } from "./keypad";

describe("isAvailableKey", () => {
  it("should return false when not available", () => {
    expect(
      isAvailableKey([
        {
          value: "4",
          label: "four"
        }
      ])({ key: "2" })
    ).toBe(false);
  });
  it("should return true when available", () => {
    expect(
      isAvailableKey([
        {
          value: "5",
          label: "five"
        }
      ])({ key: "5" })
    ).toBe(true);
  });
});

describe("execKey", () => {
  it("should not call when not found", () => {
    const mockOnInput = jest.fn();
    execKey(
      [
        {
          value: "5",
          label: "five"
        }
      ],
      mockOnInput
    )({ key: "4" });
    expect(mockOnInput).not.toBeCalled();
  });
  it("should call when found", () => {
    const mockOnInput = jest.fn();
    execKey(
      [
        {
          value: "5",
          label: "five"
        }
      ],
      mockOnInput
    )({ key: "5" });
    expect(mockOnInput).toBeCalled();
    expect(mockOnInput).toBeCalledWith({
      value: "5",
      label: "five"
    });
  });
});
