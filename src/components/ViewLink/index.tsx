import type { FC } from "react";
import styles from "./ViewLink.module.css";
import { IViewLink } from "./ViewLink.types";

export const ViewLink: FC<IViewLink> = ({ to, title }) => {
  return (
    <a href={to} className={styles.container}>
      {title}
    </a>
  );
};
