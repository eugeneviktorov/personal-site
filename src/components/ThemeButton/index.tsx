import { FC, useEffect, useState } from "react";
import { Theme } from "./ThemeButton.types";
import { getSavedTheme, saveTheme } from "@app/utils/localStorage";
import { IconButton } from "@app/ui/IconButton";
import { MoonIcon, SunIcon, SystemIcon } from "@app/ui/icons";

export const ThemeButton: FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.SYSTEM);

  const setDocumentTheme = (theme: Theme) => {
    const appliedTheme =
      theme === Theme.SYSTEM
        ? window.matchMedia("(prefers-color-scheme: dark)").matches
          ? Theme.DARK
          : Theme.LIGHT
        : theme;

    document.documentElement.setAttribute("data-theme", appliedTheme);
  };

  useEffect(() => {
    const saved = getSavedTheme();
    const initial = saved ?? Theme.SYSTEM;
    setTheme(initial);
    setDocumentTheme(initial);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === Theme.SYSTEM) {
        setDocumentTheme(Theme.SYSTEM);
        window.location.reload();
      }
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const applyTheme = (newTheme: Theme) => {
    if (newTheme === Theme.SYSTEM) {
      localStorage.removeItem("theme");
    } else {
      saveTheme(newTheme);
    }
    setTheme(newTheme);
    setDocumentTheme(newTheme);
    window.location.reload();
  };

  const getIcon = () => {
    switch (theme) {
      case Theme.LIGHT:
        return <SunIcon />;
      case Theme.DARK:
        return <MoonIcon />;
      case Theme.SYSTEM:
        return <SystemIcon />;
    }
  };

  const getTitle = () => {
    switch (theme) {
      case Theme.LIGHT:
        return "Светлая тема";
      case Theme.DARK:
        return "Тёмная тема";
      case Theme.SYSTEM:
        return "Системная тема";
    }
  };

  const handleChange = () => {
    const nextTheme = theme === Theme.LIGHT ? Theme.DARK : theme === Theme.DARK ? Theme.SYSTEM : Theme.LIGHT;
    applyTheme(nextTheme);
  };

  return <IconButton title={getTitle()} icon={getIcon()} onClick={handleChange} />;
};
