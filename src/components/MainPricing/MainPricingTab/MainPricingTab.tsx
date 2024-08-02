"use client";
import styles from "./MainPricingTab.module.scss";
import cn from "classnames";
import ButtonComponent from "@/components/Button/Button";
import { useTranslations } from "next-intl";
import { MainPricingTabProps } from "./MainPricingTab.props";
import { useEffect, useState } from "react";
import { GroupLevelType, IndividualLevelType } from "@/interfaces";
import { motion } from "framer-motion";

const MainPricingTab = ({ title, data }: MainPricingTabProps) => {
  const t = useTranslations();
  const [currentLevel, setCurrentLevel] = useState("");
  const [currentDuration, setCurrentDuration] = useState(0);
  const [currentPerHour, setCurrentPerHour] = useState(0);
  const [currentCoursePrice, setCurrentCoursePrice] = useState(0);
  const [currentPriceWithDiscount, setCurrentPriceWithDiscount] = useState(0);

  useEffect(() => {
    setCurrentLevel(data[0].level);
    setCurrentDuration(data[0].duration);
    setCurrentPerHour(data[0].pricePerHour);
    setCurrentCoursePrice(data[0].allCoursePrice);
    setCurrentPriceWithDiscount(data[0].priceWithDiscount);
  }, []);

  const changeLevel = (level: IndividualLevelType | GroupLevelType) => {
    const priceItem = data.find((item) => item.level === level);
    if (priceItem) {
      setCurrentDuration(priceItem.duration);
      setCurrentPerHour(priceItem.pricePerHour);
      setCurrentCoursePrice(priceItem.allCoursePrice);
      setCurrentPriceWithDiscount(priceItem.priceWithDiscount);
    }
    setCurrentLevel(level);
  };

  return (
    <div className={cn(styles["tab"])}>
      <h3 className={cn(styles["tab__title"])}>{title}</h3>
      <div className={cn(styles["tab__content"])}>
        <ul className={cn(styles["tab__button-list"])}>
          {data.map((item, idx) => (
            <li className={cn(styles["tab__button-list-item"])} key={idx}>
              <ButtonComponent
                className={cn(styles["tab__button"])}
                onClick={() => changeLevel(item.level)}
                buttonType={item.level === currentLevel ? "green" : "white"}
              >
                {item.level}
              </ButtonComponent>
            </li>
          ))}
        </ul>

        <div className={cn(styles["tab__information-block"])}>
          <div className={cn(styles["tab__duration-block"])}>
            <h4
              className={cn(
                styles["tab__information-title"],
                styles["tab__duration-title"]
              )}
            >
              {t("main_pricing.duration")}
            </h4>
            <motion.p
              key={currentDuration}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4, delay: 0.2 },
              }}
              className={cn(styles["tab__information-value"])}
            >
              {currentDuration}
            </motion.p>
            <p className={cn(styles["tab__duration-hours"])}>
              {t("main_pricing.hours")}
            </p>
          </div>

          <div className={cn(styles["tab__per-hour-block"])}>
            <h4 className={cn(styles["tab__information-title"])}>
              {t("main_pricing.per_hour")}
            </h4>
            <motion.p
              key={currentPerHour}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4, delay: 0.2 },
              }}
              className={cn(styles["tab__information-value"])}
            >
              {`€${currentPerHour}`}
            </motion.p>
          </div>

          <div className={cn(styles["tab__per-course-block"])}>
            <h4
              className={cn(
                styles["tab__information-title"],
                styles["tab__per-course-title"]
              )}
            >
              {t("main_pricing.per_course")}
            </h4>
            <motion.p
              key={currentCoursePrice}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.4, delay: 0.2 },
              }}
              className={cn(styles["tab__information-value"])}
            >
              {`€${currentCoursePrice}`}
              {currentCoursePrice !== currentPriceWithDiscount && (
                <span
                  className={cn(
                    styles["tab__information-discount"],
                    styles["tab__per-course-discount"]
                  )}
                >
                  {`€${currentPriceWithDiscount}`}
                </span>
              )}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPricingTab;
