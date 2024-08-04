import { DetailedHTMLProps, HTMLAttributes } from "react";

export type optionsForText = {
  targets: string[];
  fontWeight: number;
  colorText: "white" | "green";
};

export interface HowItWorksCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  strong: string;
  className?: "resume_how_it_works" | "speaking_club_how_it_works" | "documents_how_it_works" | "students_how_it_works" | "prepare_to_test_how_it_works" | "consultation_how_it_works";
  text: string;
  order: number;
  options: optionsForText;
}