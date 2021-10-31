import React, { FC } from "react";
import classes from "./display.module.css";
import { useDisplay } from "./hooks";

export interface DisplayProps {
  text?: string;
}

const Display: FC<DisplayProps> = ({ text }) => {
  const { value } = useDisplay({ text });

  return (
    <div className="text-right text-2xl">
      {value === "" ? <>&nbsp;</> : value}
    </div>
  );
};

export default Display;
