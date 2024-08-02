import cn from "classnames";
import styles from "./AdditionalServices.module.scss";
import ResumeImage from "../../../public/advantages_icons/resume.png";
import TranslateImage from "../../../public/advantages_icons/translate_documents.png";
import ConsultationImage from "../../../public/advantages_icons/consultations.png";
import { useTranslations } from "next-intl";
import Image from "next/image";

const AdditionalServices = () => {
  const t = useTranslations();
  return (
    <div className={cn(styles["services"])}>
      <div className={cn(styles["container"])}>
        <div className={cn(styles["services__title-block"])}>
          <h2>
            <span className={cn(styles["services__white-title"])}>
              {t("additional_services_white_title")}
            </span>
            <span className={cn(styles["services__black-title"])}>
              {t("additional_services_black_title")}
            </span>
          </h2>
          <div className={cn(styles["services__white-circle"])}></div>
        </div>

        <div className={cn(styles["services__services-list"])}>
          <div
            className={cn(
              styles["services__list-item"],
              styles["services__resume"]
            )}
          >
            <div className={cn(styles["services__image-block"])}>
              <Image
                className={cn(styles["services__image"])}
                src={ResumeImage}
                alt="writing a resume"
              />
            </div>
            <p className={cn(styles["services__list-item-text"])}>
              {t("additional_services_items.resume")}
            </p>
          </div>
          <div
            className={cn(
              styles["services__list-item"],
              styles["services__translations"]
            )}
          >
            <div className={cn(styles["services__image-block"])}>
              <Image
                className={cn(styles["services__image"])}
                src={TranslateImage}
                alt="translate documents"
              />
            </div>
            <p className={cn(styles["services__list-item-text"])}>
              {t("additional_services_items.translations")}
            </p>
          </div>
          <div
            className={cn(
              styles["services__list-item"],
              styles["services__consultation"]
            )}
          >
            <div className={cn(styles["services__image-block"])}>
              <Image
                className={cn(styles["services__image"])}
                src={ConsultationImage}
                alt="consultation"
              />
            </div>
            <p className={cn(styles["services__list-item-text"])}>
              {t("additional_services_items.consultations")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
