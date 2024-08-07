import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/Faq";
import { FormComponent } from "@/components/Form/Form";
import GreenContentBlock from "@/components/GreenContentBlock/GreenContentBlock";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";
import WhatCanWeHelp from "@/components/WhatCanWeHelp/WhatCanWeHelp";
import styles from "@/styles/StudentsPage.module.scss";
import prices from "@/../public/prices.json";

export default function StudentsPage() {
  return (
    <>
      <section className={styles["students__banner-section"]}>
        <Banner greenContent={false} bannerName="students_banner" />
      </section>
      <section className={styles["students__green-content-section"]}>
        <div className={styles["students__green-content-block"]}>
          <GreenContentBlock
            content={"students_green_content"}
            revers={true}
            optionsForTextWithPhoto={{
              targets: ["больше", "6", "лет"],
              fontWeight: 700,
              colorText: "green",
            }}
            optionsForTextBelowPhoto={{
              targets: ["помогать", "ребятам"],
              fontWeight: 700,
              colorText: "white",
            }}
          />
        </div>
        <div className={styles["students__what-can-we-help-block"]}>
          <WhatCanWeHelp />
        </div>
      </section>
      <section className={styles["students__how-it-works-section"]}>
        <HowItWorks
          title="how_it_works"
          dataString="students_how_it_works"
          textOptions={{
            targets: [],
            fontWeight: 0,
            colorText: "white",
          }}
        />
      </section>
      <section className={styles["students__pricing-section"]}>
        <Pricing price={prices.students} perLesson={false} />
      </section>
      <section className={styles["students__form-section"]}>
        <FormComponent styleType="white" title="form.title_for_students" />
      </section>
      <section className={styles["students__faq-section"]}>
        <FAQ faqType={"FAQ_students"} />
      </section>
    </>
  );
}
