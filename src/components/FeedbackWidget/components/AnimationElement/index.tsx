import { FC } from "react";
import styles from "./AnimationElement.module.css";
import { WorkIcon } from "@app/ui/icons";

export const AnimationElement: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.circleOuter}>
        <svg viewBox="0 0 100 100" className={styles.circle}>
          <circle cx="50" cy="50" r="45" />
        </svg>
        <div className={styles.circleInner}>
          <svg viewBox="0 0 100 100" className={styles.circle}>
            <circle cx="50" cy="50" r="35" />
          </svg>
          <div className={styles.content}>
            <WorkIcon fill="var(--text)" width={40} height={40} />
            <div className={styles.title}>Ваши данные будут в безопасности</div>
          </div>
        </div>
      </div>
    </div>
  );
};
