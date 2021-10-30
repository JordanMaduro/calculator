import React, { FC } from "react";
import classes from "./display.module.css";
import { useDisplay } from "./hooks";

export interface DisplayProps {
  text?: string;
}

const Display: FC<DisplayProps> = ({ text }) => {
  const { value } = useDisplay({ text });

  return <div>{value}</div>;
};

export default Display;
