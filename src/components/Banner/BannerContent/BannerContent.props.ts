import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BannerContentProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  classname?: string;
  strong: string;
  text: string;
  greenText?: string;
  buttonText: string;
  bannerName: "resume_banner" | "speaking_club_banner" | "documents_banner" | "students_banner" | "prepare_to_test_banner";
}