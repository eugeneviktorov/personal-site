import { FC } from "react";
import styles from "./ContactItem.module.css";
import { IContactItem } from "./ContactItem.types";

export const ContactItem: FC<IContactItem> = ({ icon, link, title }) => {
  return (
    <div className={styles.container}>
      <div>{icon}</div>
      {link ? (
        <a href={link} className={styles.link}>
          {title}
        </a>
      ) : (
        <div className={styles.title}>{title}</div>
      )}
    </div>
  );
};
