import styles from "./FaqCard.module.scss";
import cn from "classnames";
import ArrowIcon from "@/../public/common/arrow.svg";
import { FaqCardProps } from "./FaqCard.props";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FaqCard = ({ title, innerContent }: FaqCardProps): JSX.Element => {
  const [isShowedInnerContent, setIsShowedInnerContent] = useState(false);

  return (
    <div className={cn(styles["card"])}>
      <div className={cn(styles["card__title-block"])}>
        <p className={cn(styles["card__title"])}>{title}</p>
        <motion.div
          animate={
            isShowedInnerContent
              ? { transform: "rotate(90deg)" }
              : { transform: "rotate(0deg)" }
          }
        >
          <button
            onClick={() => setIsShowedInnerContent(!isShowedInnerContent)}
            className={cn(styles["card__button"])}
          >
            <ArrowIcon />
          </button>
        </motion.div>
      </div>
      <motion.div
        layout
        initial={{ height: 0, overflow: "hidden", padding: 0 }}
        animate={isShowedInnerContent ? { height: "auto", transition: {duration: 0.25}, padding: ["36px", "0px", "18px", "19px"] } : { height: 0 }}
        transition={{ ease: "linear", duration: 0.25 }}
        className={cn(styles["card__content-block"], {
          [styles["card__content-block-active"]]: isShowedInnerContent,
        })}
      >
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isShowedInnerContent ? { opacity: 1, display: "block", transition: {delay: 0.25} } : { opacity: 0, display: 'none'}}
          transition={{ ease: "linear", duration: 0.25 }}
        className={cn(styles["card__content"])}>{innerContent}</motion.p>
      </motion.div>
    </div>
  );
};

export default FaqCard;
