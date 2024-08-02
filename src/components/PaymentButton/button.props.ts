import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface PaymentButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'| 'ref'> {
  apperance: 'payment' | 'primary' | 'ghost' | 'hover';
  classname?: string;
  children: ReactNode;
}