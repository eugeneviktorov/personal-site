import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind: ButtonKind;
  children: ReactNode;
  className?: string;
  noHover?: boolean;
}

export enum ButtonKind {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
