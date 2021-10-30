export interface UseDisplayProps {}

export interface UseDisplay {
  value: string;
}

const useDisplay = (): UseDisplay => {

  return {
    value: "Display",
  };
};

export default useDisplay;
