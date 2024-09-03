import styles from "./MainPricing.module.scss";
import cn from "classnames";
import MainPricingTab from "./MainPricingTab/MainPricingTab";
import {
  createIndividualCoursesData,
  // createGroupCoursesData,
} from "@/utils/createPriceDataForMain";
import { useTranslations } from "next-intl";

const MainPricing = () => {
  const t = useTranslations();
  return (
    <div className={cn(styles["main-pricing"])}>
      <div className={cn(styles["container"])}>
        <h2 className={cn(styles["main-pricing__title"])}>
          {t("main_pricing.title")}
        </h2>
        <div className={cn(styles["main-pricing__tab-block"])}>
          <MainPricingTab
            title={t("individual_pricing")}
            data={createIndividualCoursesData()}
          />
          {/* <MainPricingTab
            title={t("individual_pricing")}
            data={createIndividualCoursesData()}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MainPricing;
