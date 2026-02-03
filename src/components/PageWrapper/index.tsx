import { FC } from "react";

import styles from "./PageWrapper.module.css";
import { IPageWrapper } from "./PageWrapper.types";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Title } from "./components/Title";

export const PageWrapper: FC<IPageWrapper> = ({ title, headerMain, headerBack, children }) => {
  return (
    <>
      <Title title={title} />
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
