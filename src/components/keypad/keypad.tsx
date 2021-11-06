import classNames from "classnames";
import React, { FC } from "react";
import { useKeypad } from "./hooks";
import { UseKeypadProps } from "./hooks/use-keypad";
import classes from "./keypad.module.css";
import { KeyTypes } from "./keypad.typing";

export interface KeypadProps {
  onInput?: UseKeypadProps["onInput"];
}

const Keypad: FC<KeypadProps> = ({ onInput }) => {
  const { keys, handleClick } = useKeypad({
    onInput
  });

  return (
    <div className={classNames(classes.container)}>
      {keys.map((key) => (
        <div
          className={classNames(classes.key, {
            [classes.operation]: key.type === KeyTypes.FUNCTION
          })}
          key={key.value}
          onClick={handleClick(key)}
        >
          <div>{key.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Keypad;
