import { HowItWorksCardProps } from "./HowItWorksCard.props";
import styles from './HowItWorksCard.module.scss';
import cn from 'classnames';
import TextComponent from "@/components/Text/Text";

const HowItWorksCard = ({strong, text, order, options, className}: HowItWorksCardProps) => {
  return (
    <div className={cn(styles["card"], {
      [styles["card__resume"]]: className === "resume_how_it_works",
          [styles["card__speaking-club"]]: className === "speaking_club_how_it_works",
          [styles["card__consultation"]]: className === "consultation_how_it_works",
          [styles["card__documents"]]: className === "documents_how_it_works",
          [styles["card__prepare-to-test"]]: className === "prepare_to_test_how_it_works",
          [styles["card__students"]]: className === "students_how_it_works"
    })}>
      <div className={cn(styles["card__order-block"])}>
        <p className={cn(styles["card__order"], {
          [styles["card__order-resume"]]: className === "resume_how_it_works",
          [styles["card__order-speaking-club"]]: className === "speaking_club_how_it_works",
          [styles["card__order-consultation"]]: className === "consultation_how_it_works",
          [styles["card__order-documents"]]: className === "documents_how_it_works",
          [styles["card__order-prepare-to-test"]]: className === "prepare_to_test_how_it_works",
          [styles["card__order-students"]]: className === "students_how_it_works"
        })}>{`${order}.`}</p>
      </div>
      <div className={cn(styles["card__text-block"])}>
        <p className={cn(styles["card__content-block"])}>
          <span className={cn(styles["card__strong"])}>
            <TextComponent text={`${strong} `} targets={options.targets} textColor={options.colorText} fontWeight={options.fontWeight} />
          </span>
          <span className={cn(styles["card__text"], {
            [styles["card__non-text"]]: text.length === 0
          })}>{text}</span>
        </p>
      </div>
    </div>
  )
}

export default HowItWorksCard;