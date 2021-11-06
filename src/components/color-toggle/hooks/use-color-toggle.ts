import { useCallback, useContext } from "react";
import { calculatorContext } from "../../calculator/calculator.context";

export interface UseColorToggle {
  mode: boolean;
  onClick: (newState: boolean) => () => void;
}

const useColorToggle = (): UseColorToggle => {
  const { mode, setMode } = useContext(calculatorContext);
  const onClick = useCallback(
    (newState: boolean) => () => {
      setMode(newState);
    },
    [setMode]
  );
  return {
    mode,
    onClick
  };
};

export default useColorToggle;
