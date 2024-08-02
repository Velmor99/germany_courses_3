import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface LocalizationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  classname?: string;
  isInBurger: boolean
}