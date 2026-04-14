import type { FC } from "react";

import style from "./ControlButton.module.css";
import { IControlButton } from "./ControlButton.types";

export const ControlButton: FC<IControlButton> = ({ title, onClick }) => {
  return (
    <button className={style.container} onClick={onClick}>
      {title}
    </button>
  );
};
