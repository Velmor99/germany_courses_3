import { DetailedHTMLProps, HTMLAttributes } from "react";

export type optionsForText = {
  targets: string[];
  fontWeight: number;
  colorText: "white" | "green";
};

export interface ContentWithPhotoProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  partOne: "resume_content_with_photo_part_one";
  partTwo: "resume_content_with_photo_part_two";
  partOneOptions: optionsForText;
  partTwoOptions: optionsForText;
}