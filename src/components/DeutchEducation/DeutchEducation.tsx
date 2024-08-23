import cn from "classnames";
import styles from "./DeutchEducation.module.scss";
import TextComponent from "../Text/Text";
import { useTranslations } from "next-intl";

const DeutchEducation = () => {
  const t = useTranslations();
  return (
    <div className={cn(styles["deutch"])}>
      <div className={cn(styles["container"])}>
        <h2 className={cn(styles["deutch__title"])}>
          {t("deutch_education_title")}
        </h2>
        <div className={cn(styles["deutch__level-block"])}>
          <div className={cn(styles["deutch__left-block"])}>
            <div className={cn(styles["deutch__a1-block"])}>
              <p className={cn(styles["deutch__level-text"])}>A1</p>
            </div>
            <div className={cn(styles["deutch__from-block"])}>
              <p className={cn(styles["deutch__destination-text"])}>
                {t("deutch_education_from")}
              </p>
            </div>
          </div>

          <div className={cn(styles["deutch__right-block"])}>
            <div className={cn(styles["deutch__b2-block"])}>
              <p className={cn(styles["deutch__level-text"])}>B2</p>
            </div>
            <div className={cn(styles["deutch__to-block"])}>
              <p className={cn(styles["deutch__destination-text"])}>
                {t("deutch_education_to")}
              </p>
            </div>
          </div>
        </div>

        <p className={cn(styles["deutch__text"])}>
          <TextComponent
            text={t("deutch_education_part_one")}
            targets={["Welingua"]}
            textColor={"green"}
            fontWeight={700}
          />
        </p>
        <p className={cn(styles["deutch__text"])}>
          {t("deutch_education_part_two")}
        </p>
      </div>
    </div>
  );
};

export default DeutchEducation;
