export interface UseDisplayProps {
  text: string;
  subText: string;
}

export interface UseDisplay {
  value: string;
  subValue: string;
}

const useDisplay = ({ text = "", subText = "" }): UseDisplay => {
  return {
    value: text,
    subValue: subText
  };
};

export default useDisplay;
