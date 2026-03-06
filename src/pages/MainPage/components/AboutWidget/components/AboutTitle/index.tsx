import { FC, useEffect, useState } from "react";

import styles from "./AboutTitle.module.css";

export const AboutTitle: FC = () => {
  const words = ["для людей", "для клиентов", "для бизнеса"];
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExiting(true);

      setTimeout(() => {
        setIndex((i) => (i + 1) % words.length);
        setIsExiting(false);
      }, 300);
    }, 3500);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={styles.container}>
      Разработка продуманных визуальных решений,{" "}
      <span className={styles.content}>
        <span className={`${styles.word} ${isExiting ? styles.exit : styles.enter}`}>{words[index]}</span>
      </span>
    </div>
  );
};
