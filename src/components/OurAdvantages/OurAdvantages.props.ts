import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface OurAdvantagesProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imageType: "prepareToTest" | "documents";
}