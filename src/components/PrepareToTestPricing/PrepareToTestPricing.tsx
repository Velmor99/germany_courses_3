import cn from "classnames";
import styles from "./PrepareToTestPricing.module.scss";
import prices from "../../../public/prices.json";
import { useTranslations } from "next-intl";

const PrepareToTestPricing = () => {
  const t = useTranslations();
  return (
    <div className={cn(styles["pricing"])}>
      <div className={cn(styles["container"])}>
        <div className={cn(styles["pricing__content"])}>
          <h2 className={cn(styles["pricing__title"])}>
            {t("pricing_title_course")}
          </h2>
          <ul className={cn(styles["pricing__card-list"])}>
            <li className={cn(styles["pricing__card"])}>
              <div className={cn(styles["pricing__card-title-block"])}>
                <span className={cn(styles["pricing__card-title"])}>
                  {t("groups_pricing")}
                </span>
              </div>
              <div
                className={cn(
                  styles["pricing__card-price"],
                  styles["pricing__card-price-first"]
                )}
              >
                <p className={cn(styles["pricing__price"])}>
                  {"€" + prices.prepare_to_test.group}
                </p>
              </div>
            </li>

            <li className={cn(styles["pricing__card"])}>
              <div className={cn(styles["pricing__card-title-block"])}>
                <span className={cn(styles["pricing__card-title"])}>
                  {t("individual_pricing")}
                </span>
              </div>
              <div
                className={cn(
                  styles["pricing__card-price"],
                  styles["pricing__card-price-second"]
                )}
              >
                <p className={cn(styles["pricing__price"])}>
                  {"€" + prices.prepare_to_test.individual}
                </p>
              </div>
            </li>
          </ul>
          <span className={cn(styles["pricing__parts-text"])}>
            {t("some_parts_of_payment")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PrepareToTestPricing;
