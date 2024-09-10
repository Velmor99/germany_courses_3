import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface TitleComponentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
}