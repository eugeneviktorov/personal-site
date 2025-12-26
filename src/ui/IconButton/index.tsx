import styles from "./IconButton.module.css";
import { FC } from "react";
import { IIconButton } from "./IconButton.types";
import { classNames } from "@app/utils/classNames";
import { Button } from "../Button";
import { ButtonKind } from "../Button/Button.types";

export const IconButton: FC<IIconButton> = ({ icon, className, noHover, ...props }) => (
  <Button
    kind={ButtonKind.SECONDARY}
    className={classNames(styles.iconButton, className || "")}
    data-no-hover={noHover || undefined}
    {...props}
  >
    {icon}
  </Button>
);
