import { Theme } from "@app/components/Header/components/ThemeButton/ThemeButton.types";

// Загружает тему системы
const THEME_KEY = "theme";

export const getSavedTheme = (): Theme | null => {
  const theme = localStorage.getItem(THEME_KEY) as Theme | null;
  return theme === Theme.LIGHT || theme === Theme.DARK ? theme : null;
};

export const saveTheme = (theme: Theme) => {
  if (theme === Theme.SYSTEM) {
    localStorage.removeItem(THEME_KEY);
  } else {
    localStorage.setItem(THEME_KEY, theme);
  }
};
