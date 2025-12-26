import { FC } from "react";
import styles from "./FeedbackWidget.module.css";
import { TitleWidget } from "../TitleWidget";
import { FeedbackForm } from "./components/FeedbackForm";
import { AnimationElement } from "./components/AnimationElement";
import { useIsMobileQuery } from "@app/hooks/useIsMobileQuery";

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
