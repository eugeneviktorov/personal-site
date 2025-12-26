import { ReactNode } from "react";

export interface IMenuMobile {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
