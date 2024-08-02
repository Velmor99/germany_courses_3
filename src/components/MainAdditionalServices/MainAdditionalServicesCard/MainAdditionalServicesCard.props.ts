import { DetailedHTMLProps, HTMLAttributes } from "react";
import { routes } from "../../../../routes";

export interface MainAdditionalServicesCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title:
    | "main_additional_links.cv_writing"
    | "main_additional_links.free_information_course"
    | "main_additional_links.conversational_club"
    | "main_additional_links.preparing_documents"
    | "main_additional_links.personal_consultation"
    | "main_additional_links.admission_to_universities"
    | "main_additional_links.prepare_to_technical_language_test";
  price: number;
  linkHref: string;
}
