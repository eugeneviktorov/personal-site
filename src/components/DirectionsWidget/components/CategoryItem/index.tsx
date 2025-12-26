import { FC } from "react";
import styles from "./CategoryItem.module.css";
import { ICategoryItem } from "./CategoryItem.types";

export const CategoryItem: FC<ICategoryItem> = ({ icon, title, description }) => {
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
