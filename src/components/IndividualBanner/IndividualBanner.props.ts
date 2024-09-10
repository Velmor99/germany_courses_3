import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IndividualBannerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  text: string;
  buttonText: string;
  where: string;
}