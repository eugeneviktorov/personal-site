import { ControlButton } from "@app/ui/ControlButton";
import type { FC } from "react";

import style from "./MainWindow.module.css";
import { IMainWindow } from "./MainWindow.types";

export const MainWindow: FC<IMainWindow> = ({ icon, title, onClose, children }) => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.barImage}>
          <img src={`/icons/${icon}`} className={style.image} />
          <div className={style.titleBar}>{title}</div>
        </div>
        <div className={style.controls}>
          <ControlButton title="X" onClick={onClose} />
        </div>
      </div>
      <div className={style.content}>{children}</div>
    </div>
  );
};
