"use client";
import { useTranslations } from "next-intl";
import cn from "classnames";
import styles from "./Faq.module.scss";
import FaqCard from "./FaqCard/FaqCard";
import { FaqProps } from "./Faq.props";
import data from "@/../languages/de.json";
import { useEffect, useState } from "react";
import { IFormatedData } from "@/interfaces";
import { motion } from "framer-motion";

const FAQ = ({ faqType }: FaqProps): JSX.Element => {
  const t = useTranslations();
  const [faqData, setFaqData] = useState<IFormatedData[]>([]);

  useEffect(() => {
    const formated: IFormatedData[] = [...createFormatedData()];
    setFaqData(formated);
  }, []);

  const createFormatedData = (): { title: string; content: string }[] | [] => {
    const elements = Object.keys(data[`${faqType}`]);
    return elements.map((item) => {
      return {
        title: t(`${faqType}.${item}.title`),
        content: t(`${faqType}.${item}.content`),
      };
    });
  };

  return (
    <div className={cn(styles["faq"])}>
      <div className={cn(styles["container"])}>
        <div className={cn(styles["faq__content"])}>
          <h2 className={cn(styles["faq__title"])}>{t("FAQ_title")}</h2>
          <ul className={cn(styles["faq__list"])}>
            {faqData.map((item, idx) => (
              <motion.li
                layout
                key={idx}
                className={cn(styles["faq__list-item"])}
              >
                <FaqCard title={item.title} innerContent={item.content} />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
