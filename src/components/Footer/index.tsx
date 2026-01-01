import { FC } from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router";

export const Footer: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.primaryColumn}>
          <div className={styles.title}>Лицо</div>
          <div className={styles.description}>Самозанятый</div>
          <div className={styles.description}>Викторов Евгений</div>
        </div>
        <div className={styles.secondColumn}>
          <div className={styles.title}>Контакты</div>
          <div className={styles.description}>
            Форма связи
          </div>
          <a href="mailto:eviktorovvv+site@gmail.com" className={styles.link}>
            eviktorovvv+site@gmail.com
          </a>
        </div>
        <div className={styles.thirdColumn}>
          <div className={styles.title}>Документы</div>
          <Link to="/terms-of-use" className={styles.link}>
            Пользовательское соглашение
          </Link>
          <Link to="/privacy-policy" className={styles.link}>
            Политика конфиденциальности
          </Link>
        </div>
        <div className={styles.quaternaryColumn}>
          <div className={styles.title}>Правовое</div>
          <div className={styles.description}>viktorovvv.ru, 2024-2026</div>
          <div className={styles.description}>© Все права защищены</div>
        </div>
      </div>
    </div>
  );
};
