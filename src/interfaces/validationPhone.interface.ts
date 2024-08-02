import { CountryCode } from "libphonenumber-js";

export interface IPhoneValidation {
  phone: string;
  country: CountryCode;
}