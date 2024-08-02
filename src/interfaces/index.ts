import prices from '../../public/prices.json';

export interface IFormatedData {
  title: string;
  content: string;
}

export interface IAdvancedHowItWorks {
  strong: string;
  text: string;
}

export type IHowItWorks = IAdvancedHowItWorks | string;

export interface ICoursesDataFormated {
  level: IndividualLevelType | GroupLevelType;
  duration: number;
  pricePerHour: number;
  allCoursePrice: number;
  priceWithDiscount: number;
}

export type IndividualLevelType = keyof typeof prices.main.individual;
export type GroupLevelType = keyof typeof prices.main.group;