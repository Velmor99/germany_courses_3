import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IndividualBannerTextContentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  text: string;
  buttonText: string;
  // t: (s: string) => string
}