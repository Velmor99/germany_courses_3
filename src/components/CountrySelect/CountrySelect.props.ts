import { CountryCode } from "libphonenumber-js";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface CountrySelectProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  callback: (country: string) => void;
}