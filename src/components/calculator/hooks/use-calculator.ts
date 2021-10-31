import { evaluate } from "mathjs";
import { useState } from "react";
import { Key, KeyTypes } from "../../keypad/hooks/use-keypad";
export interface UseCalculatorProps {}

export interface UseCalculator {
  value: string;
  handleInput: (key: Key) => void;
}

const availableFunctions = {
  "=": (value: string, _?: Key) => evaluate(value),
  AC: (value: string, _?: Key) => {
    return `${value}`.slice(0, -1);
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

  return {
    value: currentValue,
    handleInput: (key) => {
      try {
        const nextValue = processInput(currentValue, key);
        if (nextValue !== null) {
          setCurrentValue(nextValue);
        }
      } catch (e) {}
    }
  };
};

export default useCalculator;
