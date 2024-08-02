import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FormWeProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  iconStyle: "green" | "white";
}