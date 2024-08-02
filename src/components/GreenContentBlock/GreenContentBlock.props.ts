import { DetailedHTMLProps, HTMLAttributes } from "react";

export type optionsForText = {
  targets: string[];
  fontWeight: number;
  colorText: "white" | "green";
};

export interface GreenContentProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  content:
    | "main_green_content"
    | "resume_green_content"
    | "resume_green_content_desktop"
    | "speaking_club_green_content"
    | "documents_green_content"
    | "students_green_content"
    | "prepare_to_test_green_content"
    | "consultation_green_content";
  revers: boolean;
  optionsForTextWithPhoto: optionsForText;
  optionsForTextBelowPhoto: optionsForText;
}
