import { useKeyPress } from "ahooks";

export enum KeyTypes {
  EXPRESSION = "EXPRESSION",
  FUNCTION = "FUNCTION"
}

export interface Key {
  value: string;
  label: string;
  type?: KeyTypes;
  keyBinding?: string;
}

export interface UseKeypadProps {
  onInput?: (value: Key) => void;
}

export interface UseKeypad {
  keys: Key[];
  handleClick: (value: Key) => () => void;
}

const simple = [
  {
    value: "C",
    label: "C",
    type: KeyTypes.FUNCTION
  },
  {
    value: "(",
    label: "("
  },
  {
    value: ")",
    label: ")"
  },
  {
    value: "%",
    label: "%"
  },

  {
    value: "7",
    label: "7"
  },
  {
    value: "8",
    label: "8"
  },
  {
    value: "9",
    label: "9"
  },
  {
    value: "/",
    label: "÷"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "5",
    label: "5"
  },
  {
    value: "6",
    label: "6"
  },
  {
    value: "*",
    label: "X"
  },
  {
    value: "1",
    label: "1"
  },
  {
    value: "2",
    label: "2"
  },
  {
    value: "3",
    label: "3"
  },
  {
    value: "-",
    label: "-"
  },
  {
    value: "0",
    label: "0"
  },
  {
    value: ".",
    label: "."
  },

  {
    value: "+",
    label: "+"
  },
  {
    value: "=",
    label: "=",
    type: KeyTypes.FUNCTION,
    keyBinding: "Enter"
  },
  {
    value: "AC",
    label: "AC",
    type: KeyTypes.FUNCTION,
    keyBinding: "Backspace"
  }
];

const useKeypad = ({
  onInput = () => undefined
}: UseKeypadProps): UseKeypad => {
  useKeyPress(
    (event) =>
      simple.some((i) => i.keyBinding === event.key || i.value === event.key),
    (event) => {
      const key = simple.find(
        (i) => i.keyBinding === event.key || i.value === event.key
      );
      if (key) {
        onInput(key);
      }
    }
  );

  return {
    handleClick: (value) => () => {
      onInput(value);
    },
    keys: simple
  };
};

export default useKeypad;
