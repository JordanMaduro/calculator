import { evaluate } from "mathjs";
import { useState } from "react";
import { Key, KeyTypes } from "../../keypad/hooks/use-keypad";
export interface UseCalculatorProps {}

export interface UseCalculator {
  value: string;
  previousValue: string;
  handleInput: (key: Key) => void;
}

const availableFunctions = {
  "=": (value: string, _?: Key) => evaluate(value),
  AC: (value: string, _?: Key) => {
    return `${value}`.slice(0, -1);
  },
  C: (_: string, __?: Key) => {
    return "";
  }
};

const availableFunctionsKeys = Object.keys(availableFunctions);

const isAvailableFunction = (func: string) => {
  return availableFunctionsKeys.includes(func);
};
const isFunctionKey = (key: Key) => key.type === KeyTypes.FUNCTION;

const processInput = (currentValue: any, key: Key): string | null => {
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

const useCalculator = (): UseCalculator => {
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");

  return {
    previousValue,
    value: currentValue,
    handleInput: (key) => {
      try {
        const nextValue = processInput(currentValue, key);
        if (key.value === "=" && nextValue) {
          setPreviousValue(currentValue);
        }
        if (nextValue !== null) {
          setCurrentValue(nextValue);
        }
      } catch (e) {}
    }
  };
};

export default useCalculator;
