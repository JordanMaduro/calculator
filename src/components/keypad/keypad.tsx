import { Button } from "antd";
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
        <Button key={key.value} onClick={handleClick(key)}>
          {key.label}
        </Button>
      ))}
    </div>
  );
};

export default Keypad;
