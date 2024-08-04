import TextComponent from "@/components/Text/Text";
import cn from "classnames";
import styles from "./AdvantagesPrepareToTestCard.module.scss";
import { AdvantagesPrepareToTestCardProps } from "./AdvantagesPrepareToTestCard.props";

const AdvantagesPrepareToTestCard = ({
  imageTitleTop,
  imageTitleBottom,
  strongText,
  text,
  textOption,
  className,
}: AdvantagesPrepareToTestCardProps) => {
  return (
    <div className={cn(styles["card"])}>
      <div className={cn(styles["card__background-block"])}>
        <h3 className={cn(styles["card__title"])}>
          <span className={cn(styles["card__title-top"], className)}>{imageTitleTop}</span>
          <span className={cn(styles["card__title-bottom"])}>{imageTitleBottom}</span>
        </h3>
      </div>
      <div className={cn(styles["card__text-content"])}>
        <p className={cn(styles["card__strong-text"])}>{strongText}</p>
        <p className={cn(styles["card__text"])}>
          <TextComponent text={text} targets={textOption.targets} textColor={textOption.colorText} fontWeight={textOption.fontWeight} />
        </p>
      </div>
    </div>
  );
};

export default AdvantagesPrepareToTestCard;
