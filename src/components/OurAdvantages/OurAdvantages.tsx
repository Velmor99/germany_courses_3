import cn from "classnames";
import styles from "./OurAdvantages.module.scss";
import { OurAdvantagesProps } from "./OurAdvantages.props";
import AdvantagesDocumentsCard from "./OurAdvantagesCard/DocumentsCard/AdvantagesDocumentsCard";
import AdvantagesPrepareToTestCard from "./OurAdvantagesCard/PrepareToTestCard/AdvantagesPrepareToTestCard";
import { useTranslations } from "next-intl";

const OurAdvantages = ({ imageType }: OurAdvantagesProps) => {
  const t = useTranslations();
  return (
    <div className={cn(styles["our-advantages"])}>
      <div className={cn(styles["container"])}>
        <h2 className={cn(styles["our-advantages__title"])}>
          {t("our_advantages_title")}
        </h2>
        <ul
          className={cn(styles["our-advantages__list"], {
            [styles["our-advantages__list-documents"]]:
              imageType === "documents",
          })}
        >
          {imageType === "documents" ? (
            <>
              <li
                className={cn(
                  styles["our-advantages__list-item"],
                  styles["our-advantages__list-item-documnets"]
                )}
              >
                <AdvantagesDocumentsCard
                  className={cn(
                    styles["card-background"],
                    styles["card-background-first"]
                  )}
                  text={t("our_advantages_documents.1.text")}
                  optionText={{
                    targets: ["знают", "каждую", "деталь"],
                    fontWeight: 700,
                    colorText: "green",
                  }}
                />
              </li>
              <li
                className={cn(
                  styles["our-advantages__list-item"],
                  styles["our-advantages__list-item-documnets"]
                )}
              >
                <AdvantagesDocumentsCard
                  className={cn(
                    styles["card-background"],
                    styles["card-background-second"]
                  )}
                  text={t("our_advantages_documents.2.text")}
                  optionText={{
                    targets: ["больше", "не нужно"],
                    fontWeight: 700,
                    colorText: "green",
                  }}
                />
              </li>
              <li
                className={cn(
                  styles["our-advantages__list-item"],
                  styles["our-advantages__list-item-documnets"]
                )}
              >
                <AdvantagesDocumentsCard
                  className={cn(
                    styles["card-background"],
                    styles["card-background-third"]
                  )}
                  text={t("our_advantages_documents.3.text")}
                  optionText={{
                    targets: ["уникальное", "решение"],
                    fontWeight: 700,
                    colorText: "green",
                  }}
                />
              </li>
              <li
                className={cn(
                  styles["our-advantages__list-item"],
                  styles["our-advantages__list-item-documnets"]
                )}
              >
                <AdvantagesDocumentsCard
                  className={cn(
                    styles["card-background"],
                    styles["card-background-fourth"]
                  )}
                  text={t("our_advantages_documents.4.text")}
                  optionText={{
                    targets: ["индивидуальный"],
                    fontWeight: 700,
                    colorText: "green",
                  }}
                />
              </li>
            </>
          ) : (
            <>
              <li className={cn(styles["our-advantages__list-item"])}>
                <AdvantagesPrepareToTestCard
                  imageTitleTop={t(
                    "our_advantages_prepare_to_test.1.image_title_top"
                  )}
                  imageTitleBottom={t(
                    "our_advantages_prepare_to_test.1.image_title_bottom"
                  )}
                  strongText={t("our_advantages_prepare_to_test.1.strong")}
                  text={t("our_advantages_prepare_to_test.1.text")}
                  className={styles["big_text"]}
                  textOption={{
                    targets: ["моделирование", "экзаменационных", "ситуаций."],
                    fontWeight: 700,
                    colorText: "green",
                  }}
                />
              </li>
              <li className={cn(styles["our-advantages__list-item"])}>
                <AdvantagesPrepareToTestCard
                  imageTitleTop={t(
                    "our_advantages_prepare_to_test.2.image_title_top"
                  )}
                  imageTitleBottom={t(
                    "our_advantages_prepare_to_test.2.image_title_bottom"
                  )}
                  strongText={t("our_advantages_prepare_to_test.2.strong")}
                  text={t("our_advantages_prepare_to_test.2.text")}
                  textOption={{
                    targets: ["подходящий", "формат:"],
                    fontWeight: 700,
                    colorText: "green",
                  }}
                />
              </li>
              <li className={cn(styles["our-advantages__list-item"])}>
                <AdvantagesPrepareToTestCard
                  imageTitleTop={t(
                    "our_advantages_prepare_to_test.3.image_title_top"
                  )}
                  imageTitleBottom={t(
                    "our_advantages_prepare_to_test.3.image_title_bottom"
                  )}
                  strongText={t("our_advantages_prepare_to_test.3.strong")}
                  text={t("our_advantages_prepare_to_test.3.text")}
                  textOption={{
                    targets: ["обеспечить", "вашу", "уверенность"],
                    fontWeight: 700,
                    colorText: "green",
                  }}
                />
              </li>
              <li className={cn(styles["our-advantages__list-item"])}>
                <AdvantagesPrepareToTestCard
                  imageTitleTop={t(
                    "our_advantages_prepare_to_test.4.image_title_top"
                  )}
                  imageTitleBottom={t(
                    "our_advantages_prepare_to_test.4.image_title_bottom"
                  )}
                  strongText={t("our_advantages_prepare_to_test.4.strong")}
                  text={t("our_advantages_prepare_to_test.4.text")}
                  textOption={{
                    targets: ["уделить", "внимание", "сложным", "темам"],
                    fontWeight: 700,
                    colorText: "green",
                  }}
                />
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default OurAdvantages;
