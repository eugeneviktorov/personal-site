import { classNames } from "@app/utils/classNames";
import { FC } from "react";

import styles from "./Button.module.css";
import { IButton } from "./Button.types";

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
