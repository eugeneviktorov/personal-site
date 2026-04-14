import { FC } from "react";

import style from "./WindowContent.module.css";
import { IWindowContent } from "./WindowContent.types";

export const WindowContent: FC<IWindowContent> = ({ title, children }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      {children}
    </div>
  );
};
