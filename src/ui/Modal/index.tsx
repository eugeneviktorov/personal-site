import { useEscapeKey } from "@app/hooks/useEscapeKey";
import { FC } from "react";

import styles from "./Modal.module.css";
import { IModal } from "./Modal.types";
import { IconButton } from "../IconButton";
import { XmarkIcon } from "../Icons";
import { useIsMobileQuery } from "@app/hooks/useIsMobileQuery";

export const Modal: FC<IModal> = ({ title, width, onClose, children }) => {
  const isMobile = useIsMobileQuery();
  useEscapeKey(onClose);

  return (
    <div className={styles.overlay}>
      <div className={styles.container} style={{ width: isMobile ? "" : width }}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <IconButton icon={<XmarkIcon />} onClick={onClose} />
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
