import AdvantagesSpeakingClub from "@/components/AdvantagesSpeakingClub/AdvantagesSpeakingClub";
import Banner from "@/components/Banner/Banner";
import FAQ from "@/components/FAQ/Faq";
import { FormComponent } from "@/components/Form/Form";
import GreenContentBlock from "@/components/GreenContentBlock/GreenContentBlock";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Pricing from "@/components/Pricing/Pricing";
import styles from "@/styles/SpeakingClubPage.module.scss";
import { unstable_setRequestLocale } from "next-intl/server";
import prices from "@/../public/prices.json";

export default function SpeakingClubPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <section className={styles["speaking-club__banner-section"]}>
        <Banner greenContent={false} bannerName="speaking_club_banner" />
      </section>
      <section className={styles["speaking-club__green-content-section"]}>
        <GreenContentBlock
          content={"speaking_club_green_content"}
          revers={true}
          optionsForTextWithPhoto={{
            targets: ["важным", "навыком"],
            fontWeight: 700,
            colorText: "green",
          }}
          optionsForTextBelowPhoto={{
            targets: ["Welingua"],
            fontWeight: 700,
            colorText: "white",
          }}
        />
      </section>
      <section className={styles["speaking-club__advantages-section"]}>
        <AdvantagesSpeakingClub where="speaking_club" />
      </section>
      <section className={styles["speaking-club__how-it-works-section"]}>
        <HowItWorks
          title="how_it_works"
          dataString="speaking_club_how_it_works"
          textOptions={{
            targets: [],
            fontWeight: 0,
            colorText: "green",
          }}
        />
      </section>
      <section className={styles["speaking-club__price-section"]}>
        <Pricing price={prices.speaking_club} perLesson={true} />
      </section>
      <section className={styles["speaking-club__form-section"]}>
        <FormComponent styleType="white" title="form.title_for_speaking_club" />
      </section>
      <section className={styles["speaking-club__faq-section"]}>
        <FAQ faqType={"FAQ_speaking_club"} />
      </section>
    </>
  );
}
