import styles from "./BurgerMenu.module.scss";
import cn from "classnames";
import { BurgerMenuProps } from "./BurgerMenu.props";
import ArrowIcon from "../../../../public/common/localization_arrow.svg";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { routes } from "../../../../routes";
import Socials from "@/components/Socials/Socials";
import PhoneContact from "@/components/PhoneContact/PhoneContact";
import EmailContact from "@/components/EmailContact/EmailContact";
import LocalizationMenu from "@/components/LocalizationMenu/LocalizationMenu";

const BurgerMenu = ({ className, setBurgerMenu, title }: BurgerMenuProps) => {
  const t = useTranslations();
  return (
    <nav className={cn(styles["burger-menu"], className)}>
      <div className={cn(styles["burger-container"])}>
        <div className={cn(styles["burger-menu__title-block"])}>
          <h1 className={cn(styles["burger-menu__title"])}>{t("service")}</h1>
          <div className={cn(styles["burger-menu__icon"])}>
            <ArrowIcon />
          </div>
        </div>
        <ul
          onClick={() => setBurgerMenu()}
          className={cn(styles["burger-menu__list-of-links"])}
        >
          <li className={cn(styles["burger-menu__list-item"])}>
            <Link
              className={cn(styles["burger-menu__link"])}
              href={routes.languageSchool}
            >
              {t("footer_links.language_school")}
            </Link>
          </li>
          <li className={cn(styles["burger-menu__list-item"])}>
            <Link
              className={cn(styles["burger-menu__link"])}
              href={routes.resume}
            >
              {t("footer_links.cv_writing")}
            </Link>
          </li>
          <li className={cn(styles["burger-menu__list-item"])}>
            <Link
              className={cn(styles["burger-menu__link"])}
              href={routes.prepareToTest}
            >
              {t("footer_links.prepare_to_technical_language_test")}
            </Link>
          </li>
          <li className={cn(styles["burger-menu__list-item"])}>
            <Link
              className={cn(styles["burger-menu__link"])}
              href={routes.students}
            >
              {t("footer_links.admission_to_universities")}
            </Link>
          </li>
          <li className={cn(styles["burger-menu__list-item"])}>
            <Link
              className={cn(styles["burger-menu__link"])}
              href={routes.consultation}
            >
              {t("footer_links.personal_consultation")}
            </Link>
          </li>
          <li className={cn(styles["burger-menu__list-item"])}>
            <Link
              className={cn(styles["burger-menu__link"])}
              href={routes.speakingClub}
            >
              {t("footer_links.conversational_club")}
            </Link>
          </li>
          <li className={cn(styles["burger-menu__list-item"])}>
            <Link
              className={cn(styles["burger-menu__link"])}
              href={routes.freeCourse}
            >
              {t("footer_links.free_information_course")}
            </Link>
          </li>
          <li className={cn(styles["burger-menu__list-item"])}>
            <Link
              className={cn(styles["burger-menu__link"])}
              href={routes.documents}
            >
              {t("footer_links.preparing_documents")}
            </Link>
          </li>
        </ul>
        <ul
          onClick={() => setBurgerMenu()}
          className={cn(styles["burger-menu__list-of-documents"])}
        >
          <li>
            <Link className={cn(styles["burger-menu__link"])} href="/">
              Публичная оферта
            </Link>
          </li>
          <li>
            <Link className={cn(styles["burger-menu__link"])} href="/">
              Политика конфиденциальности
            </Link>
          </li>
        </ul>

        <div
          onClick={() => setBurgerMenu()}
          className={cn(styles["burger-menu__localization-block"])}
        >
          <LocalizationMenu isInBurger={true} />
        </div>

        <div
          onClick={() => setBurgerMenu()}
          className={cn(styles["burger-menu__socials-block"])}
        >
          <Socials iconsType="black" />
        </div>

        <div
          onClick={() => setBurgerMenu()}
          className={cn(styles["burger-menu__phone-block"])}
        >
          <PhoneContact styleType="black" />
        </div>

        <div
          onClick={() => setBurgerMenu()}
          className={cn(styles["burger-menu__email-block"])}
        >
          <EmailContact styleType="black" />
        </div>

        {/*TODO remove bottom block */}
        <div className={cn(styles["burger-menu__bottom-block"])}></div>
      </div>
    </nav>
  );
};

export default BurgerMenu;
