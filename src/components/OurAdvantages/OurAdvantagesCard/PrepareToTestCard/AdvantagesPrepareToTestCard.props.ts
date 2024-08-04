import { DetailedHTMLProps, HTMLAttributes } from "react";

export type optionsForText = {
  targets: string[];
  fontWeight: number;
  colorText: "white" | "green";
};

export interface AdvantagesPrepareToTestCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    imageTitleTop: string;
    imageTitleBottom: string;
    strongText: string;
    text: string;
    textOption: optionsForText;
}