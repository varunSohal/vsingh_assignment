import { MouseEventHandler } from "react";

export interface ButtonProps {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
