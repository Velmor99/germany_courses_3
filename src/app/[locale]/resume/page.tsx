import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/Faq";
import { FormComponent } from "@/components/Form/Form";
import GreenContentBlock from "@/components/GreenContentBlock/GreenContentBlock";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";
import styles from "@/styles/ResumePage.module.scss";
import prices from "@/../public/prices.json";
import { unstable_setRequestLocale } from "next-intl/server";
import ContentWithPhoto from "@/components/ContentWithPhoto/ContentWithPhoto";
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
      <section className={styles["resume__banner-section"]}>
        <Banner greenContent={true} bannerName="resume_banner" />
      </section>
      <section className={styles["resume__green-content-section"]}>
        <div className={styles["resume__green-content-block"]}>
          <div className={styles["resume__green-content-mobile"]}>
            <GreenContentBlock
              content={"resume_green_content"}
              revers={false}
              optionsForTextWithPhoto={{
                targets: ["Резюме —"],
                fontWeight: 700,
                colorText: "green",
              }}
              optionsForTextBelowPhoto={{
                targets: ["привлечь", "внимание"],
                fontWeight: 700,
                colorText: "white",
              }}
            />
          </div>
          <div className={styles["resume__green-content-desktop"]}>
            <GreenContentBlock
              content={"resume_green_content_desktop"}
              revers={false}
              optionsForTextWithPhoto={{
                targets: ["Резюме —"],
                fontWeight: 700,
                colorText: "green",
              }}
              optionsForTextBelowPhoto={{
                targets: ["привлечь", "внимание"],
                fontWeight: 700,
                colorText: "white",
              }}
            />
          </div>
        </div>
        <div className={styles["resume__content-with-photo-block"]}>
          <ContentWithPhoto
            partOne="resume_content_with_photo_part_one"
            partTwo="resume_content_with_photo_part_two"
            partOneOptions={{
              targets: [],
              fontWeight: 0,
              colorText: "white",
            }}
            partTwoOptions={{
              targets: ["Мы", "знаем", "выделяться", "среди", "других"],
              fontWeight: 700,
              colorText: "green",
            }}
          />
        </div>
      </section>
      <section className={styles["resume__pricing-section"]}>
        <Pricing price={prices.resume} perLesson={false} />
      </section>
      <section className={styles["resume__how-it-works-section"]}>
        <HowItWorks
          title="how_it_works"
          dataString="resume_how_it_works"
          textOptions={{
            targets: ["«Оплатить»"],
            fontWeight: 700,
            colorText: "green",
          }}
        />
      </section>
      <section className={styles["resume__form-section"]}>
        <FormComponent styleType="white" title="form.title_for_resume" />
      </section>
      <section className={styles["resume__faq-section"]}>
        <FAQ faqType="FAQ_resume" />
      </section>
    </>
  );
}
