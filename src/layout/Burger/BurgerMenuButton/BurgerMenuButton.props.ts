import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BurgerButtonMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  changeMenu: () => void;
  isShowed: boolean;
}