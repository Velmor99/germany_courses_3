import IndividualBanner from "@/components/IndividualBanner/IndividualBanner";
import styles from "@/styles/ConsultationPage.module.scss";

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
    </>
  );
}
