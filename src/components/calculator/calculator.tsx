import React, { FC } from "react";
import { Display } from "../display";
import { Keypad } from "../keypad";
import classes from "./calculator.module.css";
import { useCalculator } from "./hooks";

export interface CalculatorProps {}

const Calculator: FC<CalculatorProps> = ({}) => {
  const { value, previousValue, handleInput } = useCalculator();
  console.log(previousValue);
  return (
    <div className="bg-white max-w-md">
      <Display text={value} subText={previousValue} />
      <Keypad onInput={handleInput} />
    </div>
  );
};

export default Calculator;
