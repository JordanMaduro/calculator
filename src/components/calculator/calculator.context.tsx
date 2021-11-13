import React, {
  createContext,
  FC,
  useCallback,
  useMemo,
  useState
} from "react";

// Find a better way to initialize createContext
export const calculatorContext = createContext({
  mode: false,
  setMode: (_: boolean) => {}
});

export const CalculatorProvider: FC = ({ children }) => {
  const [state, setstate] = useState(false);
  const setMode = useCallback(
    (newState: boolean) => setstate(newState),
    [setstate]
  );

  const value = useMemo(() => {
    return {
      mode: state,
      setMode
    };
  }, [state, setMode]);

  return (
    <calculatorContext.Provider value={value}>
      {children}
    </calculatorContext.Provider>
  );
};
