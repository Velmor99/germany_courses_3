import GreenContentBlock from "@/components/GreenContentBlock/GreenContentBlock";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import IndividualBanner from "@/components/IndividualBanner/IndividualBanner";
import Pricing from "@/components/Pricing/Pricing";
import SortOfConsultation from "@/components/SortOfConsultation/SortOfConsultation";
import TitleComponent from "@/components/TitleComponent/TitleComponent";
import styles from "@/styles/ConsultationPage.module.scss";
import prices from "../../../../public/prices.json";
import { FormComponent } from "@/components/Form/Form";

export default function ConsultationPage() {
  return (
    <>
      <section className={styles["consultation__banner-section"]}>
        <IndividualBanner
          text="consultation_banner_text"
          title="consultation_banner_title"
          buttonText="consultation_banner_button"
          where="consultation"
        />
      </section>
      <section className={styles["consultation__sort-of-section"]}>
        <SortOfConsultation
          textOptions={{
            targets: ["с многолетним", "опытом"],
            fontWeight: 700,
            colorText: "green",
          }}
        />
      </section>
      <section className={styles["consultation__title-section"]}>
        <TitleComponent title={"consultation_title"} />
      </section>
      <section className={styles["consultation__green-content-section"]}>
        <GreenContentBlock
          content={"consultation_green_content"}
          revers={true}
          optionsForTextWithPhoto={{
            targets: ["на многие", "аспекты", "вашей", "жизни."],
            fontWeight: 700,
            colorText: "green",
          }}
          optionsForTextBelowPhoto={{
            targets: [
              "избежать",
              "ошибок,",
              "сэкономить",
              "время",
              "и деньги,",
            ],
            fontWeight: 700,
            colorText: "white",
          }}
        />
      </section>
      <section className={styles["consultation__how-it-works-section"]}>
        <HowItWorks
          title="how_it_works"
          dataString="consultation_how_it_works"
          textOptions={{
            targets: [],
            fontWeight: 0,
            colorText: "white",
          }}
        />
      </section>
      <section className={styles["consultation__pricing-section"]}>
        <Pricing price={prices.consultation} perLesson={false} />
      </section>
      <section className={styles["consultation__form-section"]}>
        <FormComponent styleType="white" title="form.title_for_consultation" />
      </section>
    </>
  );
}
