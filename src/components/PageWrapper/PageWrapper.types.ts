import { ReactNode } from "react";

export interface IPageWrapper {
  title?: string;
  headerMain?: boolean;
  headerBack?: boolean;
  children: ReactNode;
}
