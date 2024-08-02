"use client";
import { countries } from "country-flag-icons";
import Image from "next/image";
import styles from "./CountrySelect.module.scss";
import cn from "classnames";
import { useEffect, useState } from "react";
import { CountrySelectProps } from "./CountrySelect.props";
import { filterCountriesFlag } from "@/utils/filterListOfCountriesFlag";
// import { CountryCode } from "libphonenumber-js";

const CountrySelect = ({
  className,
  callback,
}: CountrySelectProps): JSX.Element => {
  const [currentFlag, setCurrentFlag] = useState(
    "http://purecatamphetamine.github.io/country-flag-icons/3x2/UA.svg"
  );
  const [filteredCountries, setFilteredCountries] = useState<string[]>([]);
  const [isCountriesMenuOpen, setIsCountriesMenuOpen] = useState(false);

  useEffect(() => {
    const filtered = filterCountriesFlag(countries);
    setFilteredCountries(filtered);
    //TODO without magic strings
    callback("UA");
  }, []);

  const changeFlag = (country: string) => {
    setCurrentFlag(
      `http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`
    );
    callback(country);
    setIsCountriesMenuOpen(false);
  };

  const changeFlagMenu = (value: boolean) => {
    setIsCountriesMenuOpen(value);
  };

  return (
    <div className={cn(styles["select"], className)}>
      <div onClick={() => changeFlagMenu(!isCountriesMenuOpen)}>
        <Image
          className={cn(styles["select__flag-icon"])}
          alt="country flag"
          width={38}
          height={27}
          src={currentFlag}
        />
      </div>
      {isCountriesMenuOpen && (
        <ul className={cn(styles["select__list"])}>
          {filteredCountries.map((country, idx) => (
            <li
              className={cn(styles["select__list-item"])}
              key={idx}
              onClick={() => changeFlag(country)}
            >
              <Image
                className={cn(styles["select__flag-icon"])}
                alt="country flag"
                width={38}
                height={27}
                src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${country}.svg`}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountrySelect;
