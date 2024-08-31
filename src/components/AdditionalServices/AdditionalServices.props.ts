import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AdditionalServiceProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    additionalServiceTitles: {whiteTitle: string, blackTitle: string}
    additionalServiceResume: string
    additionalServiceTranslations: string
    additionalServiceConsultations: string
}