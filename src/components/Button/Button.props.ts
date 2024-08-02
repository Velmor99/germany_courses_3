import React, { ButtonHTMLAttributes, DetailedHTMLProps, EventHandler, ReactNode } from "react";

export interface ButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'| 'ref'> {
  children: ReactNode;
  buttonType: "white" | "green";
  onSubmit?: () => void | null;
  isLoading?: boolean;
}