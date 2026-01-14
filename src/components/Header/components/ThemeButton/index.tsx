import { useIsMobileQuery } from "@app/hooks/useIsMobileQuery";
import { Button } from "@app/ui/Button";
import { ButtonKind } from "@app/ui/Button/Button.types";
import { IconButton } from "@app/ui/IconButton";
import { BrushIcon } from "@app/ui/Icons";
import { getSavedTheme, saveTheme } from "@app/utils/localStorage";
import { useEffect, useState } from "react";
import styles from "./ThemeButton.module.css";
import { Theme } from "./ThemeButton.types";
import { ThemeSuggestions } from "../ThemeSuggestions";

export const ThemeButton = () => {
  const isMobile = useIsMobileQuery();

  const [isThemes, setThemes] = useState(false);
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
  };

  return (
    <>
      {isMobile ? (
        <Button kind={ButtonKind.SECONDARY} onClick={() => setThemes(true)} className={styles.button}>
          <BrushIcon width={12} />
          Тема системы
        </Button>
      ) : (
        <IconButton onClick={() => setThemes(true)} icon={<BrushIcon />} title="Тема системы" />
      )}
      {isThemes && (
        <ThemeSuggestions onClose={() => setThemes(false)} onThemeChange={applyTheme} currentTheme={theme} />
      )}
    </>
  );
};
