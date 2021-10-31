import React, { FC } from "react";
import { useDisplay } from "./hooks";

export interface DisplayProps {
  text?: string;
  subText?: string;
}

const Display: FC<DisplayProps> = ({ text, subText }) => {
  const { value, subValue } = useDisplay({ text, subText });

  return (
    <div className="p-4 border-b">
      <div className="text-xl text-right">
        {subValue === "" ? <>&nbsp;</> : subValue}
      </div>
      <div className="text-4xl text-right">
        {value === "" ? <>&nbsp;</> : value}
      </div>
    </div>
  );
};

export default Display;
