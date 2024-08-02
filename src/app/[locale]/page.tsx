import IndividualBanner from "@/components/IndividualBanner/IndividualBanner";
import { useTranslations } from "next-intl";
import styles from "../../styles/MainPage.module.scss";
import AdvantagesSpeakingClub from "@/components/AdvantagesSpeakingClub/AdvantagesSpeakingClub";
import AdditionalServices from "@/components/AdditionalServices/AdditionalServices";
import GreenContentBlock from "@/components/GreenContentBlock/GreenContentBlock";
import DeutchEducation from "@/components/DeutchEducation/DeutchEducation";
import MainPricing from "@/components/MainPricing/MainPricing";
import MainAdditionalServices from "@/components/MainAdditionalServices/MainAdditionalServices";
import { FormComponent } from "@/components/Form/Form";

export default function HomePage() {
  const t = useTranslations();
  return (
    <>
      <section className={styles["main-page__banner-section"]}>
        <IndividualBanner
          title="main_banner_title"
          text="main_banner_text"
          buttonText="main_banner_button"
          where="main"
        />
      </section>
      <section className={styles["main-page__advantages-section"]}>
        <AdvantagesSpeakingClub where="main" />
      </section>
      <section className={styles["main-page__additional-services-section"]}>
        <AdditionalServices />
      </section>
      <section className={styles["main-page__green-content-section"]}>
        <div className={styles["main-page__green-content-block"]}>
          <GreenContentBlock
            revers={true}
            content={"main_green_content"}
            optionsForTextWithPhoto={{
              targets: ["Welingua"],
              fontWeight: 700,
              colorText: "green",
            }}
            optionsForTextBelowPhoto={{
              targets: ["не ограничиваются", "учебниками"],
              fontWeight: 700,
              colorText: "white",
            }}
          />
        </div>
        <div className={styles["main-page__deutch-education-block"]}>
          <DeutchEducation />
        </div>
      </section>
      <section className={styles["main-page__pricing-section"]}>
        <MainPricing />
      </section>
      <section className={styles["main-page__form-section"]}>
        <FormComponent title={"form.title_for_main"} styleType="green" />
      </section>
      <section className={styles["main-page__additional-section"]}>
        <MainAdditionalServices />
      </section>
    </>
  );
}
