import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface SocialsProps extends DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement> {
  iconsType: 'black' | 'white'; 
}