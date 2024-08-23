import styles from "./Pricing.module.scss";
import cn from "classnames";
import { PricingProps } from "./Pricing.props";
import EuroIcon from "../../../public/common/euro.svg";
import EuroMobileIcon from "../../../public/common/euro-mobile.svg";
import { useTranslations } from "next-intl";

const Pricing = ({
  price,
  className,
  perLesson,
}: PricingProps): JSX.Element => {
  const t = useTranslations();
  return (
    <div className={cn(styles["pricing"], className)}>
      <div className={cn(styles["pricing__yellow-background"])}>
        <div className={cn(styles["container"])}>
          <div className={cn(styles["pricing__block"])}>
            <div className={cn(styles["pricing__title-block"])}>
              <h1 className={cn(styles["pricing__title"])}>
                {t("pricing_title")}
              </h1>
            </div>
            <div className={cn(styles["pricing__price-block"])}>
              <div className={cn(styles["pricing__price"])}>
                {price}
                <div className={cn(styles["pricing__thing"])}>
                  <div className={styles["euro-icon"]}>
                    <EuroIcon />
                  </div>
                  <div className={styles["euro-mobile-icon"]}>
                    <EuroMobileIcon />
                  </div>
                </div>
              </div>
            </div>
            {perLesson && (
              <div className={cn(styles["pricing__per-lesson-block"])}>
                <span className={cn(styles["pricing__per-lesson-text"])}>
                  {t("per_lesson")}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
