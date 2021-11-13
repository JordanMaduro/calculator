import { useEffect, useMemo, useRef, useState } from "react";

const canvas = document.createElement("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const extractFontMetrics = (element: HTMLElement) => {
  const styles = window.getComputedStyle(element, null);

  return {
    font: styles.font,
    fontSize: parseFloat(styles.getPropertyValue("font-size")),
    fontFamily: styles.getPropertyValue("font-family"),
    width: parseFloat(styles.getPropertyValue("width"))
  };
};

const scaleFit = (
  value: string,
  font: string,
  width: number,
  threshold = 0.9
) => {
  if (ctx) {
    ctx.font = font;
    ctx.font;
    const text = ctx.measureText(value);

    return Math.min((width * threshold) / text.width, 1);
  }

  return 1;
};

export interface UseTextFitProps {
  value: string;
}

export const useTextFit = ({ value }: UseTextFitProps) => {
  const [defaultSize, setDefaultSize] = useState<number | undefined>();
  const [scale, setScale] = useState<number | undefined>();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const { fontSize } = extractFontMetrics(ref.current);

      setDefaultSize(fontSize);
      return () => {
        setDefaultSize(undefined);
      };
    }
    return () => undefined;
  }, [setDefaultSize]);

  useEffect(() => {
    if (defaultSize && canvas) {
      if (ctx && ref.current) {
        const { font, width } = extractFontMetrics(ref.current);
        setScale(scaleFit(value, font, width));
      }
      () => {
        setScale(undefined);
      };
    }
  }, [value, defaultSize]);

  return useMemo(() => {
    return {
      ref,
      scale: scale ?? 1
    };
  }, [scale]);
};

export default useTextFit;
