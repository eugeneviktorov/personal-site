import { FC } from "react";
import styles from "./AboutWidget.module.css";
import { AboutTitle } from "./components/AboutTitle";

export const AboutWidget: FC = () => {
  return (
    <div className={styles.container}>
      <AboutTitle />
      <div className={styles.description}>
        Создание простых и понятных продуктов, которые помогут пользователям быстро и эффективно решать свои задачи
      </div>
    </div>
  );
};
