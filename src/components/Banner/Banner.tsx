import cn from "classnames";
import styles from "./Banner.module.scss";
import { BannerProps } from "./Banner.props";
import BannerContent from "./BannerContent/BannerContent";
import { useTranslations } from "next-intl";

const Banner = ({ bannerName, greenContent = false }: BannerProps) => {
  const t = useTranslations();
  return (
    <div className={cn(styles["banner"])}>
      <div
        className={cn(styles["banner__background-desktop"], {
          [styles["resume-background-desktop"]]: bannerName === "resume_banner",
          [styles["documents-background-desktop"]]:
            bannerName === "documents_banner",
          [styles["prepare-to-test-background-desktop"]]:
            bannerName === "prepare_to_test_banner",
          [styles["speaking-club-background-desktop"]]:
            bannerName === "speaking_club_banner",
          [styles["students-background-desktop"]]:
            bannerName === "students_banner",
        })}
      >
        <div className={cn(styles["banner__gradient"])}>
          <div className={cn(styles["container"])}>
            <div className={cn(styles["banner__content"])}>
              <div
                className={cn(styles["banner__background"], {
                  [styles["resume-background"]]: bannerName === "resume_banner",
                  [styles["documents-background"]]:
                    bannerName === "documents_banner",
                  [styles["prepare-to-test-background"]]:
                    bannerName === "prepare_to_test_banner",
                  [styles["speaking-club-background"]]:
                    bannerName === "speaking_club_banner",
                  [styles["students-background"]]:
                    bannerName === "students_banner",
                })}
              ></div>
              <BannerContent
                bannerName={bannerName}
                className={cn(styles["banner__inner-content"])}
                strong={t(`${bannerName}.strong`)}
                text={t(`${bannerName}.text`)}
                buttonText={t(`${bannerName}.button`)}
                greenText={
                  greenContent ? t(`${bannerName}.green_text`) : undefined
                }
              />
            </div>
          </div>
          {greenContent && (
            <div className={cn(styles["banner__mobile-green-block"])}>
              <p className={cn(styles["banner__mobile-green-text"])}>
                Мы поможем шагнуть уверенно!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
