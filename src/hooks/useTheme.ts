import { Theme } from "@app/components/Header/components/ThemeButton/ThemeButton.types";
import { getSavedTheme } from "@app/utils/localStorage";
import { useState, useEffect } from "react";

export const useTheme = (): boolean => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = getSavedTheme();
    const dark = saved === Theme.DARK || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(dark);
  }, []);

  return isDark;
};
