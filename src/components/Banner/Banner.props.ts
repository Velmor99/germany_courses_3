import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface BannerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  classname?: string;
  bannerName: "resume_banner" | "speaking_club_banner" | "documents_banner" | "students_banner" | "prepare_to_test_banner";
  greenContent: boolean;
}