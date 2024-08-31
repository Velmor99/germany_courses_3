import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/Faq";
import { FormComponent } from "@/components/Form/Form";
import GreenContentBlock from "@/components/GreenContentBlock/GreenContentBlock";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import OurAdvantages from "@/components/OurAdvantages/OurAdvantages";
import PrepareToTestPricing from "@/components/PrepareToTestPricing/PrepareToTestPricing";
import { unstable_setRequestLocale } from "next-intl/server";
import styles from "@/styles/PrepareToTestPage.module.scss";
// import { routes } from "../../../../routes";

// const locales = Object.keys(routes.localization);

// export function generateStaticParams() {
//   return locales.map((locale) => ({ locale }));
// }

export default function PrepareToTestPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <section className={styles["prepare__banner-section"]}>
        <Banner greenContent={false} bannerName="prepare_to_test_banner" />
      </section>
      <section className={styles["prepare__green-content-section"]}>
        <div className={styles["prepare__green-content-block"]}>
          <GreenContentBlock
            content={"prepare_to_test_green_content"}
            revers={true}
            optionsForTextWithPhoto={{
              targets: [
                "Welingua",
                "большим",
                "опытом",
                "подготовки",
                "врачей",
              ],
              fontWeight: 700,
              colorText: "green",
            }}
            optionsForTextBelowPhoto={{
              targets: ["уникальная", "методика", "обучения,"],
              fontWeight: 700,
              colorText: "white",
            }}
          />
        </div>
        <div>
          <OurAdvantages imageType="prepareToTest" />
        </div>
      </section>
      <section className={styles["prepare__how-it-works-section"]}>
        <HowItWorks
          title="how_it_works"
          dataString="prepare_to_test_how_it_works"
          textOptions={{
            targets: [],
            fontWeight: 0,
            colorText: "green",
          }}
        />
      </section>
      <section className={styles["prepare__pricing-section"]}>
        <PrepareToTestPricing />
      </section>
      <section className={styles["prepare__form-section"]}>
        <FormComponent
          styleType="white"
          title="form.title_for_prepare_to_test"
        />
      </section>
      <section className={styles["prepare__faq-section"]}>
        <FAQ faqType={"FAQ_prepare_to_test"} />
      </section>
    </>
  );
}
