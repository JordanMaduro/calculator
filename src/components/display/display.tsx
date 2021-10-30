import React, { FC } from "react";
import classes from "./display.module.css";
import { useDisplay } from "./hooks";

export interface  DisplayProps {}

const Display: FC<DisplayProps> = ({}) => {
  const { value } = useDisplay();

  return (
   <div>{ value }</div>
  );
};

export default Display;
