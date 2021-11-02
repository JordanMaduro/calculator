import { useKeyPress } from "ahooks";
import { Key } from "../keypad.typing";
import { simple } from "../types/simple";
import { execKey, isAvailableKey } from "../utils/keypad";

export interface UseKeypadProps {
  onInput?: (value: Key) => void;
}

export interface UseKeypad {
  keys: Key[];
  handleClick: (value: Key) => () => void;
}

const useKeypad = ({
  onInput = () => undefined
}: UseKeypadProps): UseKeypad => {
  useKeyPress(isAvailableKey(simple), execKey(simple, onInput));

  return {
    handleClick: (value) => () => {
      onInput(value);
    },
    keys: simple
  };
};

export default useKeypad;
