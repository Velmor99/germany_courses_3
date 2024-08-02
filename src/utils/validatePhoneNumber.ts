import {
  CountryCode,
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  validatePhoneNumberLength
} from 'libphonenumber-js'

export const validatePhoneNumber = (phone: string, country: CountryCode) => {
  return isValidPhoneNumber(phone, country)
}

// isPossiblePhoneNumber('8 (800) 555-35-35', 'RU') === true
// isValidPhoneNumber('8 (800) 555-35-35', 'RU') === true

// validatePhoneNumberLength('8 (800) 555', 'RU') === 'TOO_SHORT'
// validatePhoneNumberLength('8 (800) 555-35-35', 'RU') === undefined // Length is valid.