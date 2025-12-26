import { ReactNode } from "react";
import { ButtonKind } from "../Button/Button.types";

export type ILinkButton = IHeaderLinkButton | INormalLinkButton;

export interface StandartLinkButton {
  to: string;
  children: ReactNode;
  className?: string;
}

export interface IHeaderLinkButton extends StandartLinkButton {
  header: true;
  kind?: never;
}

export interface INormalLinkButton extends StandartLinkButton {
  header?: false;
  kind: ButtonKind;
}
