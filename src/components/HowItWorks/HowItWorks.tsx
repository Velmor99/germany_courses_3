import styles from "./HowItWorks.module.scss";
import cn from "classnames";
import { HowItWorksProps } from "./HowItWorks.props";
import HowItWorksCard from "./HowItWorksCard/HowItWorksCard";
import data from "@/../languages/de.json";
import { useTranslations } from "next-intl";

const HowItWorks = ({ title, dataString, textOptions }: HowItWorksProps) => {
  const t = useTranslations();

  //TODO in anouther file
  const createFormatedData = (): { strong: string; text: string }[] | [] => {
    const elements = Object.keys(data[`${dataString}`]);
    const targetData = data[`${dataString}`][1];
    if (typeof targetData !== "string") {
      return elements.map((item) => {
        return {
          strong: t(`${dataString}.${item}.strong`),
          text: t(`${dataString}.${item}.text`),
        };
      });
    } else {
      return elements.map((item) => {
        return {
          strong: t(`${dataString}.${item}`),
          text: "",
        };
      });
    }
  };

  return (
    <div className={cn(styles["how-it-works"])}>
      <div className={cn(styles["container"])}>
        <div className={cn(styles["how-it-works__content"])}>
          <div className={cn(styles["how-it-works__title-block"])}>
            <h2 className={cn(styles["how-it-works__title"])}>
              {t(`${title}`)}
            </h2>
          </div>
          <ul className={cn(styles["how-it-works__list"])}>
            {createFormatedData().map((item, idx) => (
              <li key={idx} className={cn(styles["how-it-works__list-item"])}>
                <HowItWorksCard
                  className={dataString}
                  strong={item.strong}
                  text={item.text}
                  order={idx + 1}
                  options={textOptions}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
