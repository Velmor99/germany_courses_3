import { DetailedHTMLProps, HTMLAttributes } from "react";

export type optionsForText = {
  targets: string[];
  fontWeight: number;
  colorText: "white" | "green";
};

export interface SortOfConsultationsProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  textOptions: optionsForText;
}