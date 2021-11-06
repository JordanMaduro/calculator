import classNames from "classnames";
import React, { FC } from "react";
import { Display } from "../display";
import { Keypad } from "../keypad";
import { calculatorContext, CalculatorProvider } from "./calculator.context";
import classes from "./calculator.module.css";
import { useCalculator } from "./hooks";

const Calculator: FC = () => {
  const { value, previousValue, handleInput } = useCalculator();
  return (
    <CalculatorProvider>
      <calculatorContext.Consumer>
        {({ mode }) => (
          <div className={classNames({ dark: mode }, classes.wrapper)}>
            <div className={classes.calculator}>
              <Display text={value} subText={previousValue} />
              <Keypad onInput={handleInput} />
            </div>
          </div>
        )}
      </calculatorContext.Consumer>
    </CalculatorProvider>
  );
};

export default Calculator;
