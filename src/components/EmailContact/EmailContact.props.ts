import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface EmailContactProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  classname?: string;
  styleType: "black" | "white";
}