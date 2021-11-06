import React, { FC } from "react";
import { ColorToggle } from "../color-toggle";
import { useDisplay } from "./hooks";
import classes from "./display.module.css";

export interface DisplayProps {
  text?: string;
  subText?: string;
}

const Display: FC<DisplayProps> = ({ text, subText }) => {
  const { value, subValue } = useDisplay({ text, subText });

  return (
    <div className={classes.container}>
      <ColorToggle />
      <div className={classes.textArea}>
        <div className={classes.subText}>
          {subValue === "" ? <>&nbsp;</> : subValue}
        </div>
        <div className={classes.text}>{value === "" ? <>&nbsp;</> : value}</div>
      </div>
    </div>
  );
};

export default Display;
