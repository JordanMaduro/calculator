import { Button } from "antd";
import React, { FC } from "react";
import { useKeypad } from "./hooks";

export interface KeypadProps {}

const Keypad: FC<KeypadProps> = ({}) => {
  const { keys, handleClick } = useKeypad();

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
