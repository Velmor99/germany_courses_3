import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PricingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  price: string;
  className?: string;
  perLesson: boolean;
}