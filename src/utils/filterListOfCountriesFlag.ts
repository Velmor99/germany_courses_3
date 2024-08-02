import { CountryCode } from "libphonenumber-js";

const FIRST_PLACE_FLAGS: string[] = ["UA", "DE", "US", "RU"];

export const filterCountriesFlag = (listOfFlags: string[]): string[] => {
  const copy = [...listOfFlags];
  copy.forEach((flag, idx) => {
    for(let i = 0; i <= FIRST_PLACE_FLAGS.length; i++) {
      if(flag === FIRST_PLACE_FLAGS[i]) {
        copy.splice(idx, 1)
      }
    }
  })
  return [...FIRST_PLACE_FLAGS, ...copy]
}