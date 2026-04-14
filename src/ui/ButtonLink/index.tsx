import { FC } from "react";

import styles from "./ButtonLink.module.css";
import { IButtonLink } from "./ButtonLink.types";

export const ButtonLink: FC<IButtonLink> = ({ link, title }) => {
  return (
    <a href={link} className={styles.container}>
      {title}
    </a>
  );
};
