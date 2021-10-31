import React, { FC } from "react";
import classes from "./display.module.css";
import { useDisplay } from "./hooks";

export interface DisplayProps {
  text?: string;
  subText?: string;
}

const Display: FC<DisplayProps> = ({ text, subText }) => {
  const { value, subValue } = useDisplay({ text, subText });

  return (
    <div>
      <div className="text-right text-xl">
        {subValue === "" ? <>&nbsp;</> : subValue}
      </div>
      <div className="text-right text-2xl">
        {value === "" ? <>&nbsp;</> : value}
      </div>
    </div>
  );
};

export default Display;
