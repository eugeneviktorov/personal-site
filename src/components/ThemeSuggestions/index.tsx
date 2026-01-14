import { Button } from "@app/ui/Button";
import { ButtonKind } from "@app/ui/Button/Button.types";
import { Modal } from "@app/ui/Modal";
import { FC } from "react";

import styles from "./ThemeSuggestions.module.css";
import { IThemeSuggestions } from "./ThemeSuggestions.types";
import { Theme } from "../ThemeButton/ThemeButton.types";

export const ThemeSuggestions: FC<IThemeSuggestions> = ({ onClose, onThemeChange, currentTheme }) => {
  const getKind = (buttonTheme: Theme) => (currentTheme === buttonTheme ? ButtonKind.PRIMARY : ButtonKind.SECONDARY);

  const handleThemeChange = (theme: Theme) => {
    onThemeChange(theme);
    window.location.reload();
  };

  return (
    <Modal title="Тема системы" onClose={onClose} width={300}>
      <Button kind={getKind(Theme.SYSTEM)} className={styles.button} onClick={() => handleThemeChange(Theme.SYSTEM)}>
        Как в системе
      </Button>
      <Button kind={getKind(Theme.LIGHT)} className={styles.button} onClick={() => handleThemeChange(Theme.LIGHT)}>
        Светлая
      </Button>
      <Button kind={getKind(Theme.DARK)} className={styles.button} onClick={() => handleThemeChange(Theme.DARK)}>
        Тёмная
      </Button>
    </Modal>
  );
};
