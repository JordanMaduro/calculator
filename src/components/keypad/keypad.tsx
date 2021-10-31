import React, { FC } from "react";
import { useKeypad } from "./hooks";
import { UseKeypadProps } from "./hooks/use-keypad";

export interface KeypadProps {
  onInput?: UseKeypadProps["onInput"];
}

const Keypad: FC<KeypadProps> = ({ onInput }) => {
  const { keys, handleClick } = useKeypad({
    onInput
  });

  return (
    <div className="grid grid-cols-4">
      {keys.map((key) => (
        <div
          className=" p-2 text-2xl text-center shadow-sm active:shadow cursor-pointer select-none"
          key={key.value}
          onClick={handleClick(key)}
        >
          {key.label}
        </div>
      ))}
    </div>
  );
};

export default Keypad;
