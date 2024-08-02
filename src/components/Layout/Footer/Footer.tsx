import { useTranslations } from "next-intl";
import Link from "next/link";
import styles from "./Footer.module.scss";
import cn from "classnames";
import Socials from "@/components/Socials/Socials";
import PaymentButton from "@/components/PaymentButton/ButtonComponent";
import LogoComponent from "@/components/Logo/Logo";
import { routes } from "../../../../routes";
import PhoneContact from "@/components/PhoneContact/PhoneContact";
import EmailContact from "@/components/EmailContact/EmailContact";

const Footer = (): JSX.Element => {
  const t = useTranslations();
  const date = new Date();
  return (
    <footer className={cn(styles["footer"])}>
      <div className={cn(styles["container"])}>
        <div className={cn(styles["footer__content"])}>
          <ul className={cn(styles["footer__list"])}>
            <li
              className={cn(
                styles["footer__list-item"],
                styles["footer__list-item-first"]
              )}
            >
              <Link className={cn(styles["footer__link-text"])} href={"/"}>
                {t("footer_links.language_school")}
              </Link>
            </li>
            <li
              className={cn(
                styles["footer__list-item"],
                styles["footer__list-item-second"]
              )}
            >
              <Link
                className={cn(styles["footer__link-text"])}
                href={routes.resume}
              >
                {t("footer_links.cv_writing")}
              </Link>
            </li>
            <li
              className={cn(
                styles["footer__list-item"],
                styles["footer__list-item-third"]
              )}
            >
              <Link
                className={cn(styles["footer__link-text"])}
                href={routes.prepareToTest}
              >
                {t("footer_links.prepare_to_technical_language_test")}
              </Link>
            </li>
            <li
              className={cn(
                styles["footer__list-item"],
                styles["footer__list-item-fourth"]
              )}
            >
              <Link
                className={cn(styles["footer__link-text"])}
                href={routes.students}
              >
                {t("footer_links.admission_to_universities")}
              </Link>
            </li>
            <li
              className={cn(
                styles["footer__list-item"],
                styles["footer__list-item-fifth"]
              )}
            >
              <Link
                className={cn(styles["footer__link-text"])}
                href={routes.freeCourse}
              >
                {t("footer_links.free_information_course")}
              </Link>
            </li>

            <li
              className={cn(
                styles["footer__list-item"],
                styles["footer__list-item-sixth"]
              )}
            >
              <Link
                className={cn(styles["footer__link-text"])}
                href={routes.consultation}
              >
                {t("footer_links.personal_consultation")}
              </Link>
            </li>
            <li
              className={cn(
                styles["footer__list-item"],
                styles["footer__list-item-sixth-long"]
              )}
            >
              <Link
                className={cn(styles["footer__link-text"])}
                href={routes.consultation}
              >
                {t("footer_links.personal_consultation_long")}
              </Link>
            </li>

            <li
              className={cn(
                styles["footer__list-item"],
                styles["footer__list-item-seventh"]
              )}
            >
              <Link
                className={cn(styles["footer__link-text"])}
                href={routes.speakingClub}
              >
                {t("footer_links.conversational_club")}
              </Link>
            </li>
            <li
              className={cn(
                styles["footer__list-item"],
                styles["footer__list-item-eighth"]
              )}
            >
              <Link
                className={cn(styles["footer__link-text"])}
                href={routes.documents}
              >
                {t("footer_links.preparing_documents")}
              </Link>
            </li>

            <li
              className={cn(
                styles["footer__list-item"],
                styles["footer__list-item-nineth"]
              )}
            >
              <Link
                className={cn(styles["footer__link-text"])}
                href={routes.publicOffer}
              >
                {t("footer_links.public_offer")}
              </Link>
            </li>
            <li
              className={cn(
                styles["footer__list-item"],
                styles["footer__list-item-tenth"]
              )}
            >
              <Link
                className={cn(styles["footer__link-text"])}
                href={routes.privacyPolicy}
              >
                {t("footer_links.privacy_policy")}
              </Link>
            </li>
          </ul>

          {/* <ul className={cn(styles["footer__list-of-documents"])}>
            
          </ul> */}

          <div className={cn(styles["footer__socials-block"])}>
            <div className={cn(styles["footer__socials"])}>
              <Socials iconsType="white" />
            </div>
            {/**TODO width button 226 */}
            <PaymentButton
              classname={cn(styles["footer__payment-footer"])}
              apperance="payment"
            >
              {t("payment_button")}
            </PaymentButton>
          </div>

          <div className={cn(styles["footer__logo"])}>
            <LogoComponent logoType="white" />
            <span className={cn(styles["footer__copyright"])}>
              © Copyright {date.getFullYear()} WeLingua
            </span>
          </div>

          <div className={cn(styles["footer__email"])}>
            <EmailContact styleType="white" />
          </div>

          <div className={cn(styles["footer__phone"])}>
            <PhoneContact styleType="white" />
          </div>

          <div className={cn(styles["footer__green-line"])}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
