import { Replacement } from "@react-input/mask";
import { ReactNode } from "react";

export interface IInput {
  value?: string;
  onChange?: (newValue: string) => void;
  disabled?: boolean;
  icon?: ReactNode;
  placeholder?: string;
  inputMode: InputMode;
  className?: string;
  name?: string;
  mask?: string;
  replacement?: string | Replacement;
}

export enum InputMode {
  SEARCH = "search",
  NONE = "none",
  TEXT = "text",
  TEL = "tel",
  URL = "url",
  EMAIL = "email",
  NUMERIC = "numeric",
  DECIMAL = "decimal",
}
