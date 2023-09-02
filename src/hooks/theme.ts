import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const [initTheme, setInitTheme] = useState(
    localStorage.getItem("theme") || "whiteTheme"
  );

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setInitTheme(savedTheme || "whiteTheme");
  }, []);

  return { initTheme, setInitTheme };
};
