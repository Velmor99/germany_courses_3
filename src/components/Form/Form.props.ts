import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface FormProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  styleType: "white" | "green";
  title:
    | "form.title_for_main"
    | "form.title_for_consultation"
    | "form.title_for_prepare_to_test"
    | "form.title_for_students"
    | "form.title_for_documents"
    | "form.title_for_speaking_club"
    | "form.title_for_resume";
}
