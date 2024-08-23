import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
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
}: LocalizationProps): JSX.Element => {
  const [isOpenLocalizationMenu, openLocalizationMenu] = useState(false);
  const pathname = usePathname();
  const lang = pathname.split("/");

  const changeLocalizationMenu = (value: boolean) => {
    openLocalizationMenu(value);
  };

  const transformLocaleToText = () => {
    if (lang.includes("en")) {
      return routes.localization.en.title;
    } else if (lang.includes("de")) {
      return routes.localization.de.title;
    } else if (lang.includes("ru")) {
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
          <Link
            replace={true}
            href={`/en`}
            className={cn(styles["localization__link"], {
              [styles["localization__link-active"]]:
                lang.includes("en") && isOpenLocalizationMenu,
              [styles["localization__link-open"]]: isOpenLocalizationMenu,
            })}
          >
            {routes.localization.en.title}
          </Link>
        </motion.li>
        <motion.li
          onClick={() => changeLocalizationMenu(false)}
          className={cn(styles["localization__list-item"])}
          animate={isOpenLocalizationMenu ? "visible" : "hidden"}
          variants={variantsChildren}
        >
          <Link
            className={cn(styles["localization__link"], {
              [styles["localization__link-open-active"]]:
                lang.includes("de") && isOpenLocalizationMenu,
              [styles["localization__link-open"]]: isOpenLocalizationMenu,
            })}
            replace={true}
            href={`/de`}
          >
            {routes.localization.de.title}
          </Link>
        </motion.li>
        {/* <li onClick={() => changeLocalizationMenu(false)} className={cn(styles["localization__list-item"])}>
            <Link
              className={cn(styles["localization__link"], {
                [styles["localization__link-active"]]: router.locale === "ua"
              })}
              replace={true}
              href={pathname}
              locale="ua"
            >
              {routes.localization.ua.title}
            </Link>
          </li> */}
        <motion.li
          onClick={() => changeLocalizationMenu(false)}
          className={cn(styles["localization__list-item"])}
          animate={isOpenLocalizationMenu ? "visible" : "hidden"}
          variants={variantsChildren}
        >
          <Link
            className={cn(styles["localization__link"], {
              [styles["localization__link-open-active"]]:
                lang.includes("ru") && isOpenLocalizationMenu,
              [styles["localization__link-open"]]: isOpenLocalizationMenu,
            })}
            replace={true}
            href={`/ru`}
          >
            {routes.localization.ru.title}
          </Link>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default LocalizationMenu;
