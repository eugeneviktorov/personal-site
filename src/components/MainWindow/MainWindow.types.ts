import { ReactNode } from "react";

export interface IMainWindow {
  icon: string;
  title: string;
  onClose?: () => void;
  children: ReactNode;
}
