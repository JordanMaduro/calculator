import React, { FC } from "react";
import classes from "./function-panel.module.css";

export interface FunctionPanelProps {}

const FunctionPanel: FC<FunctionPanelProps> = ({ children }) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className={classes.container}>
      <div className={classes.section}>{left}</div>
      <div className={classes.section}>{right}</div>
    </div>
  );
};

export default FunctionPanel;
