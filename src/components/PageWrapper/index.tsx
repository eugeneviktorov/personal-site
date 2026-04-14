import { FC } from "react";

import styles from "./PageWrapper.module.css";
import { IPageWrapper } from "./PageWrapper.types";

export const PageWrapper: FC<IPageWrapper> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
