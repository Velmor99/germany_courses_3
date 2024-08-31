import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BurgerMenuDesktopProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  isOpened: boolean;
}