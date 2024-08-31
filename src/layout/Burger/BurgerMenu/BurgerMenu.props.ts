import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface BurgerMenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  setBurgerMenu: () => void;
}