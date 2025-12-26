import { FC } from "react";

import styles from "./Button.module.css";
import { IButton } from "./Button.types";
import { classNames } from "@app/utils/classNames";

export const Button: FC<IButton> = ({ kind, children, className, noHover, disabled, ...props }) => {
  return (
    <button
      className={classNames(styles.container, styles[kind], className ?? "")}
      data-no-hover={noHover || disabled || undefined}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
