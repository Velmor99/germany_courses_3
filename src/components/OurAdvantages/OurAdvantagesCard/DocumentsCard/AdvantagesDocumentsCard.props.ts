import { DetailedHTMLProps, HTMLAttributes } from "react";

export type optionsForText = {
  targets: string[];
  fontWeight: number;
  colorText: "white" | "green";
};

export interface AdvantagesDocumentsCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string;
    optionText: optionsForText;
}