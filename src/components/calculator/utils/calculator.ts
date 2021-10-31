import { evaluate } from "mathjs";
import { Key, KeyTypes } from "../../keypad/hooks/use-keypad";

export const availableFunctions = {
  "=": (value: string, _?: Key) => evaluate(value),
  AC: (value: string, _?: Key) => {
    return `${value}`.slice(0, -1);
  },
  C: (_: string, __?: Key) => {
    return "";
  }
};

export const availableFunctionsKeys = Object.keys(availableFunctions);

export const isAvailableFunction = (func: string) =>
  availableFunctionsKeys.includes(func);

export const isFunctionKey = (key: Key) => key.type === KeyTypes.FUNCTION;

export const processInput = (currentValue: any, key: Key): string | null => {
  if (isFunctionKey(key)) {
    if (isAvailableFunction(key.value)) {
      return availableFunctions[key.value as keyof typeof availableFunctions](
        currentValue,
        key
      );
    }
    return null;
  }
  return `${currentValue}${key.value}`;
};
