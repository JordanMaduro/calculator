import React, { FC } from "react";
import { Display } from "../display";
import { Keypad } from "../keypad";
import { useCalculator } from "./hooks";

const Calculator: FC = () => {
  const { value, previousValue, handleInput } = useCalculator();

  return (
    <div className="bg-white border shadow-lg">
      <Display text={value} subText={previousValue} />
      <Keypad onInput={handleInput} />
    </div>
  );
};

export default Calculator;
