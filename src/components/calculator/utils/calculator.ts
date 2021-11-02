import { evaluate } from "mathjs";
import { Key, KeyTypes } from "../../keypad/keypad.typing";

export const availableFunctions: Record<
  string,
  (() => string) | ((value: string) => string)
> = {
  "=": (value: string) => evaluate(value),
  AC: (value: string) => {
    return `${value}`.slice(0, -1);
  },
  C: () => {
    return "";
  }
};

export const availableFunctionsKeys = Object.keys(availableFunctions);

export const isAvailableFunction = (func: string) =>
  availableFunctionsKeys.includes(func);

export const isFunctionKey = (key: Key) => key.type === KeyTypes.FUNCTION;

export const processInput = (currentValue: string, key: Key): string | null => {
  if (isFunctionKey(key)) {
    if (isAvailableFunction(key.value)) {
      return availableFunctions[key.value as keyof typeof availableFunctions](
        currentValue
      );
    }
    return null;
  }
  return `${currentValue}${key.value}`;
};
