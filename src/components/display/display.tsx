import React, { FC } from "react";
import { ColorToggle } from "../color-toggle";
import { useDisplay } from "./hooks";
import classes from "./display.module.css";
import { useTextFit } from "../../packages/use-text-fit";

export interface DisplayProps {
  text?: string;
  subText?: string;
}

const ScalingText: FC<React.AllHTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  const { ref, scale } = useTextFit({
    value: String(children)
  });

  return (
    <div {...props} ref={ref} style={{ transform: `scale(${scale})` }}>
      {children}
    </div>
  );
};

const Display: FC<DisplayProps> = ({ text, subText }) => {
  const { value, subValue } = useDisplay({ text, subText });

  return (
    <div className={classes.container}>
      <ColorToggle />
      <div className={classes.textArea}>
        <div className={classes.subText}>
          <ScalingText className={classes.scalingText}>
            {subValue === "" ? <>&nbsp;</> : subValue}
          </ScalingText>
        </div>
        <div className={classes.text}>
          <ScalingText className={classes.scalingText}>
            {value === "" ? <>&nbsp;</> : value}
          </ScalingText>
        </div>
      </div>
    </div>
  );
};

export default Display;
