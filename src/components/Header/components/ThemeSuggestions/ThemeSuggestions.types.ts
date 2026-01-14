import { Theme } from "../ThemeButton/ThemeButton.types";

export interface IThemeSuggestions {
  onClose: () => void;
  onThemeChange: (theme: Theme) => void;
  currentTheme: Theme;
}
