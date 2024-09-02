import styles from "./MainAdditionalServices.module.scss";
import cn from "classnames";
import MainAdditionalServicesCard from "./MainAdditionalServicesCard/MainAdditionalServicesCard";
import prices from "../../../public/prices.json";
import { routes } from "../../../routes";
import { useTranslations } from "next-intl";

const MainAdditionalServices = () => {
  const t = useTranslations();
  return (
    <div className={cn(styles["services"])}>
      <div className={cn(styles["container"])}>
        <h2 className={cn(styles["services__title"])}>
          {t("additional_services_black_title")}
        </h2>
        <ul className={cn(styles["services__list"])}>
          <li
            className={cn(
              styles["services__list-item"],
              styles["services__list-item-first"]
            )}
          >
            <MainAdditionalServicesCard
              title="main_additional_links.cv_writing"
              price={Number(prices.resume)}
              linkHref={routes.resume}
              className={styles["first"]}
            />
          </li>
          <li
            className={cn(
              styles["services__list-item"],
              styles["services__list-item-second"]
            )}
          >
            <MainAdditionalServicesCard
              title="main_additional_links.free_information_course"
              price={0}
              linkHref={routes.freeCourse}
              className={styles["second"]}
            />
          </li>
          <li
            className={cn(
              styles["services__list-item"],
              styles["services__list-item-third"]
            )}
          >
            <MainAdditionalServicesCard
              title="main_additional_links.conversational_club"
              price={Number(prices.speaking_club)}
              linkHref={routes.speakingClub}
              className={styles["third"]}
            />
          </li>
          <li
            className={cn(
              styles["services__list-item"],
              styles["services__list-item-fourth"]
            )}
          >
            <MainAdditionalServicesCard
              title="main_additional_links.preparing_documents"
              price={Number(prices.documents)}
              linkHref={routes.documents}
              className={styles["fourth"]}
            />
          </li>
          <li
            className={cn(
              styles["services__list-item"],
              styles["services__list-item-fifth"]
            )}
          >
            <MainAdditionalServicesCard
              title="main_additional_links.personal_consultation"
              price={Number(prices.consultation)}
              linkHref={routes.consultation}
              className={styles["fifth"]}
            />
          </li>
          {/* <li
            className={cn(
              styles["services__list-item"],
              styles["services__list-item-sixth"]
            )}
          >
            <MainAdditionalServicesCard
              title="main_additional_links.admission_to_universities"
              price={Number(prices.students)}
              linkHref={routes.students}
              className={styles["sixth"]}
            />
          </li> */}
          <li
            className={cn(
              styles["services__list-item"],
              styles["services__list-item-seventh"]
            )}
          >
            <MainAdditionalServicesCard
              title="main_additional_links.prepare_to_technical_language_test"
              price={Number(prices.prepare_to_test.individual)}
              linkHref={routes.prepareToTest}
              className={styles["seventh"]}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainAdditionalServices;
