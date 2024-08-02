import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PhoneContactProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  classname?: string;
  styleType: "black" | "white";
}