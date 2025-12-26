import { PageWrapper } from "@app/components/PageWrapper";
import type { FC } from "react";
import styles from "./NotFoundPage.module.css";
import { LinkButton } from "@app/ui/LinkButton";
import { ButtonKind } from "@app/ui/Button/Button.types";

export const NotFoundPage: FC = () => {
  return (
    <PageWrapper title="404">
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>404</div>
          <div className={styles.description}>Такой страницы нет</div>
        </div>
        <LinkButton to="/" kind={ButtonKind.PRIMARY}>
          На главную
        </LinkButton>
      </div>
    </PageWrapper>
  );
};
