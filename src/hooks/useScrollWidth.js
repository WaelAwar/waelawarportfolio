import { useEffect, useState } from "react";

export const useScrollWidth = () => {
  const [scrollWidth, setScrollWidth] = useState(0);
  useEffect(() => {
    const updateXPosition = () => {
      setScrollWidth(window.innerWidth);
    };
    window.addEventListener("scroll", updateXPosition);
    updateXPosition();

    return () => window.removeEventListener("scroll", updateXPosition);
  }, []);
  return scrollWidth;
};
