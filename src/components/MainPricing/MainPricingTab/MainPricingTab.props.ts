import { ICoursesDataFormated } from "@/interfaces";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface MainPricingTabProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  data: ICoursesDataFormated[];
}