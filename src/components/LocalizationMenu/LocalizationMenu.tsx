"use client";
import { useState } from "react";
import { useRouter } from "@/i18n/routing";
import { usePathname } from "@/i18n/routing";
import styles from "./LocalizationMenu.module.scss";
import cn from "classnames";
import { routes } from "../../../routes";
import { LocalizationProps } from "./LocalizationMenu.props";
import LanguageIcon from "../../../public/common/language.svg";
import ArrowIcon from "../../../public/common/localization_arrow.svg";
import { motion } from "framer-motion";

// const list = { hidden: { opacity: 0 } }

const LocalizationMenu = ({
  classname,
  isInBurger,
  lang,
}: LocalizationProps): JSX.Element => {
  const [isOpenLocalizationMenu, openLocalizationMenu] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const changeLocalizationMenu = (value: boolean) => {
    openLocalizationMenu(value);
  };

  const transformLocaleToText = () => {
    if (lang && lang === "en") {
      return routes.localization.en.title;
    } else if (lang && lang === "de") {
      return routes.localization.de.title;
    } else if (lang && lang === "ru") {
      return routes.localization.ru.title;
    }
  };

  const variants = {
    visible: {
      height: "auto",
      padding: ["20px", "20px", "30px", "20px"],
      transition: {
        ease: "linear",
      },
    },
    hidden: {
      height: 0,
      padding: 0,
      overflow: "hidden",
      transition: {
        delay: 0.15,
      },
    },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.25,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.05,
      },
    },
  };

  return (
    <div
      className={cn(styles["localization"], classname)}
      // onMouseEnter={() => changeLocalizationMenu(true)}
      onClick={() => changeLocalizationMenu(!isOpenLocalizationMenu)}
    >
      <div className={cn(styles["localization__current-block"])}>
        <div className={cn(styles["localization__current-language-icon"])}>
          <LanguageIcon />
        </div>
        <span className={cn(styles["localization__current"])}>
          {transformLocaleToText()}
        </span>
        <div className={cn(styles["localization__current-arrow-icon"])}>
          <ArrowIcon />
        </div>
      </div>
      <motion.ul
        layout
        variants={variants}
        animate={isOpenLocalizationMenu ? "visible" : "hidden"}
        onMouseLeave={() => changeLocalizationMenu(false)}
        className={cn(styles["localization__list"], {
          [styles["localization__list-burger"]]: isInBurger === true,
          [styles["localization__list-open"]]: isOpenLocalizationMenu,
        })}
      >
        <motion.li
          onClick={() => changeLocalizationMenu(false)}
          className={cn(styles["localization__list-item"])}
          animate={isOpenLocalizationMenu ? "visible" : "hidden"}
          variants={variantsChildren}
        >
          <button
            onClick={() => router.replace(pathname, { locale: "en" })}
            className={cn(styles["localization__link"], {
              [styles["localization__link-open-active"]]:
                lang && lang === "en" && isOpenLocalizationMenu,
              [styles["localization__link-open"]]: isOpenLocalizationMenu,
            })}
          >
            {routes.localization.en.title}
          </button>
        </motion.li>
        <motion.li
          onClick={() => changeLocalizationMenu(false)}
          className={cn(styles["localization__list-item"])}
          animate={isOpenLocalizationMenu ? "visible" : "hidden"}
          variants={variantsChildren}
        >
          <button
            className={cn(styles["localization__link"], {
              [styles["localization__link-open-active"]]:
                lang && lang === "de" && isOpenLocalizationMenu,
              [styles["localization__link-open"]]: isOpenLocalizationMenu,
            })}
            onClick={() => router.replace(pathname, { locale: "de" })}
          >
            {routes.localization.de.title}
          </button>
        </motion.li>
        <motion.li
          onClick={() => changeLocalizationMenu(false)}
          className={cn(styles["localization__list-item"])}
          animate={isOpenLocalizationMenu ? "visible" : "hidden"}
          variants={variantsChildren}
        >
          <button
            className={cn(styles["localization__link"], {
              [styles["localization__link-open-active"]]:
                lang && lang === "ru" && isOpenLocalizationMenu,
              [styles["localization__link-open"]]: isOpenLocalizationMenu,
            })}
            onClick={() => router.replace(pathname, { locale: "ru" })}
          >
            {routes.localization.ru.title}
          </button>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default LocalizationMenu;
