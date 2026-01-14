import { FC } from "react";
import styles from "./DocumentationStyle.module.css";
import { IDocumentationStyle } from "./DocumentationStyle.types";

export const DocumentationStyle: FC<IDocumentationStyle> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
