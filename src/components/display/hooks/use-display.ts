export interface UseDisplayProps {
  text: string;
}

export interface UseDisplay {
  value: string;
}

const useDisplay = ({ text = "Display" }): UseDisplay => {
  return {
    value: text
  };
};

export default useDisplay;
