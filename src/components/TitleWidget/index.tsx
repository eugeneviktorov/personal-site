import { FC } from "react";
import styles from "./TitleWidget.module.css";
import { ITitleWidget } from "./TitleWidget.types";

export const TitleWidget: FC<ITitleWidget> = ({ title }) => {
  return <div className={styles.container}>{title}</div>;
};
