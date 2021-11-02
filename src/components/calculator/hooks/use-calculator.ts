import { useState } from "react";
import { Key } from "../../keypad/keypad.typing";
import { processInput } from "../utils/calculator";

export interface UseCalculator {
  value: string;
  previousValue: string;
  handleInput: (key: Key) => void;
}

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
        if (key.value === "C" && nextValue !== null) {
          setPreviousValue(nextValue);
        }
        if (nextValue !== null) {
          setCurrentValue(nextValue);
        }
      } catch (e) {
        // intentionally empty
      }
    }
  };
};

export default useCalculator;
