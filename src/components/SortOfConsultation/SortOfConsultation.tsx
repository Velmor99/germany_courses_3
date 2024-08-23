import cn from "classnames";
import styles from "./SortOfConsultation.module.scss";
import data from "../../../languages/de.json";
import TextComponent from "../Text/Text";
import { SortOfConsultationsProps } from "./SortOfConsultation.props";
import { useTranslations } from "next-intl";

const SortOfConsultation = ({ textOptions }: SortOfConsultationsProps) => {
  const t = useTranslations();
  const generateData = () => {
    const keys = Object.keys(data.sort_of_consultation_items);
    const genereted = keys.map((item) => `sort_of_consultation_items.${item}`);
    return genereted;
  };
  return (
    <div className={cn(styles["sort-of"])}>
      <div className={cn(styles["container"])}>
        <div className={cn(styles["sort-of__content-block"])}>
          <p className={cn(styles["sort-of__text"])}>
            <TextComponent
              text={t("sort_of_consultation_text")}
              targets={textOptions.targets}
              textColor={textOptions.colorText}
              fontWeight={textOptions.fontWeight}
            />
          </p>
          <div className={cn(styles["sort-of__image"])}>
            <div className={cn(styles["sort-of__we-icon"])}></div>
          </div>
        </div>
        <h2 className={cn(styles["sort-of__title"])}>
          {t("sort_of_consultation_title")}
        </h2>
        <ul className={cn(styles["sort-of__list"])}>
          {generateData().map((item, idx) => (
            <li className={cn(styles["sort-of__list-item"])} key={idx}>
              <div className={cn(styles["sort-of__card"])}>
                <p className={cn(styles["sort-of__card-text"])}>{t(item)}</p>
                <div className={cn(styles["sort-of__yellow-circle"])}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortOfConsultation;
