import cn from "classnames";
import styles from "./WhatCanWeHelp.module.scss";
import { useTranslations } from "next-intl";
import data from "@/../languages/de.json";
import WhatCanWeHelpCard from "./WhatCanWeHelpCard/WhatCanWeHelpCard";

const WhatCanWeHelp = () => {
  const t = useTranslations();
  const generateData = () => {
    const keys = Object.keys(data.what_can_we_help_items);
    const generated = keys.map((item) => `what_can_we_help_items.${item}`);
    return generated;
  };

  return (
    <div className={cn(styles["help"])}>
      <div className={cn(styles["container"])}>
        <h2 className={cn(styles["help__title"])}>
          {t("what_can_we_help_title")}
        </h2>
        <ul className={cn(styles["help__list"])}>
          {generateData().map((item, idx) => (
            <li
              key={idx}
              className={cn(
                styles[`help__list-item`],
                styles[`help__list-item-${idx + 1}`]
              )}
            >
              <WhatCanWeHelpCard
                className={cn(styles[`card_${idx + 1}`])}
                text={t(item)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhatCanWeHelp;
