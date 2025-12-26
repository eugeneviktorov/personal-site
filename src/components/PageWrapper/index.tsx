import { FC } from "react";

import styles from "./PageWrapper.module.css";
import { IPageWrapper } from "./PageWrapper.types";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Title } from "../Title";

export const PageWrapper: FC<IPageWrapper> = ({ title, headerMain, headerBack, children }) => {
  return (
    <>
      <Title>{title}</Title>
      <div className={styles.container}>
        <Header main={headerMain} back={headerBack} />
        <div className={styles.content}>
          <div className={styles.chapter}>{children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};
