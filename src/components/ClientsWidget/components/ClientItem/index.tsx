import { FC } from "react";
import styles from "./ClientItem.module.css";
import { IClientItem } from "./ClientItem.types";

export const ClientItem: FC<IClientItem> = ({ icon, title, description }) => {
  return (
    <div className={styles.container}>
      <div>{icon}</div>
      <div className={styles.titlesContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};
