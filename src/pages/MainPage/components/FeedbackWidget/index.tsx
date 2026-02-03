import { TitleWidget } from "@app/components/TitleWidget";
import { useIsMobileQuery } from "@app/hooks/useIsMobileQuery";
import { FC } from "react";

import { AnimationElement } from "./components/AnimationElement";
import { FeedbackForm } from "./components/FeedbackForm";
import styles from "./FeedbackWidget.module.css";

export const FeedbackWidget: FC = () => {
  const isMobile = useIsMobileQuery();

  return (
    <div className={styles.container}>
      <TitleWidget title="Обратная связь" />
      <div className={styles.content}>
        <FeedbackForm disabled />
        {!isMobile && <AnimationElement />}
      </div>
    </div>
  );
};
