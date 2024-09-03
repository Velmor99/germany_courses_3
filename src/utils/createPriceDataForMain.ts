import { IndividualLevelType, ICoursesDataFormated } from "@/interfaces";
import prices from '../../public/prices.json';

// export const createIndividualCoursesData = (): ICoursesDataFormated[] => {
//   const filtered: ICoursesDataFormated[] = [];
//   const keysOfIndividual = (Object.keys(prices.main.individual) as IndividualLevelType[]);
//   if(keysOfIndividual.length > 0) {
//     keysOfIndividual.map((item: IndividualLevelType) => {
//       const current = prices.main.individual[`${item}`]
//       return filtered.push(
//         {
//           level: item,
//           duration: Number(current.duration),
//           pricePerHour: Number(current.price_per_hour),
//           allCoursePrice: (Number(current.duration) * Number(current.price_per_hour)),
//           priceWithDiscount: (Number(current.duration) * Number(current.price_per_hour)) - Number(current.discount)
//         }
//       );
//     })
//   }
//   return filtered;
// }

export const createIndividualCoursesData = (): ICoursesDataFormated[] => {
  const filtered: ICoursesDataFormated[] = [];
  const keysOfIndividual = (Object.keys(prices.main.individual) as IndividualLevelType[]);
  if(keysOfIndividual.length > 0) {
    keysOfIndividual.map((item: IndividualLevelType) => {
      const current = prices.main.individual[`${item}`]
      return filtered.push(
        {
          level: item,
          duration: Number(current.duration),
          pricePerHour: Number(current.price_per_hour),
          allCoursePrice: (Number(current.duration) * Number(current.price_per_hour)),
          priceWithDiscount: (Number(current.duration) * Number(current.price_per_hour)) - Number(current.discount)
        }
      );
    })
  }
  return filtered;
}