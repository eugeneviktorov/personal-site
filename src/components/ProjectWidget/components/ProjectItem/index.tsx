import { FC } from "react";
import { IProjectItem } from "./ProjectItem.types";
import styles from "./ProjectItem.module.css";
import { useTheme } from "@app/hooks/useTheme";

export const ProjectItem: FC<IProjectItem> = ({ item }) => {
  const isDark = useTheme();
  const folder = isDark ? "dark" : "light"

  return (
    <a href={item.link} className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={`/projects/images/${folder}/${item.image}`} alt={item.title} className={styles.image} draggable={false} />
        {item.working && (
          <div className={styles.working}>
            <div className={styles.workingTitle}>Не работает в данный момент</div>
          </div>
        )}
      </div>
      <div className={styles.title}>{item.title}</div>
      <div className={styles.description}>{item.description}</div>
    </a>
  );
};
