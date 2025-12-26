import { ReactNode } from "react";
import { IButton } from "../Button/Button.types";

export type IIconButton = Omit<IButton, "children" | "kind"> & {
  icon: ReactNode;
  noHover?: boolean;
};
