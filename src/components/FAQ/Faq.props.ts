import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FaqProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  faqType: "FAQ_resume" | "FAQ_speaking_club" | "FAQ_documents" | "FAQ_students" | "FAQ_prepare_to_test";
}