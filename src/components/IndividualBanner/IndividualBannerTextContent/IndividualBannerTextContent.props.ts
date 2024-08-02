import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface IndividualBannerTextContentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: "main_banner_title" | "consultation_banner_title";
  text: "consultation_banner_text" | "main_banner_text";
  buttonText: "main_banner_button" | "consultation_banner_button";
}