import type { FC } from "react";
import styles from "./OfflinePage.module.css";

export const OfflinePage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>Offline</div>
        <div className={styles.description}>Проверьте подключение к интернету</div>
      </div>
    </div>
  );
};
