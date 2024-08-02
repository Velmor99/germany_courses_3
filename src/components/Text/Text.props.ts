import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TextComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  text: string;
  targets: string[];
  textColor: "white" | "green";
  fontWeight: number;
}