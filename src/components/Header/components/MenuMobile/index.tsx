import { IconButton } from "@app/ui/IconButton";
import { XmarkIcon } from "@app/ui/Icons";
import { classNames } from "@app/utils/classNames";
import { FC } from "react";
import { IMenuMobile } from "./MenuMobile.types";
import styles from "./MenuMobile.module.css";
import { LogotypeLink } from "../LogotypeLink";

export const MenuMobile: FC<IMenuMobile> = ({ isOpen, onClose, children }) => {
  return (
    <div className={classNames(styles.container, isOpen ? styles.open : "")}>
      <div className={styles.header}>
        <LogotypeLink />
        <IconButton icon={<XmarkIcon />} onClick={onClose} />
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
