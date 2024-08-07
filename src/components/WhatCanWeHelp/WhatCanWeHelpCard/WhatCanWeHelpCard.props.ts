import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface WhatCanWeHelpCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    text: string;
}