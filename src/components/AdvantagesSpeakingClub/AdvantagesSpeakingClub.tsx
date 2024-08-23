import cn from "classnames";
import styles from "./AdvantagesSpeakingClub.module.scss";
import Image from "next/image";
import VebinarImage from "../../../public/advantages_icons/vebinars.png";
import DictionaryImage from "../../../public/advantages_icons/dictionary.png";
import PronunciationImage from "../../../public/advantages_icons/improve_pronunciation.png";
import GroupsImage from "../../../public/advantages_icons/groups.png";
import VideoCoursesImage from "../../../public/advantages_icons/video-courses.png";
import SpeakingClubImage from "../../../public/advantages_icons/speaking-club.png";
import PrepareToExamImage from "../../../public/advantages_icons/prepare_to_exam.png";
import { AdvantagesProps } from "./AdvantagesSpeakingClub.props";
// import { useTranslations } from "next-intl";

const AdvantagesSpeakingClub = ({ where, t }: AdvantagesProps) => {
  // const t = useTranslations();
  return (
    <div className={cn(styles["advantages"])}>
      <div className={cn(styles["container"])}>
        <h2 className={cn(styles["advantages__title"])}>
          {where === "speaking_club"
            ? t("speaking_club_adventages_title")
            : t("main_advantages_title")}
        </h2>
        <ul className={cn(styles["advantages__list"])}>
          <li className={cn(styles["advantages__list-item"])}>
            <div className={cn(styles["advantages__image-block"])}>
              <Image
                className={cn(styles["advantages__image"])}
                src={
                  where === "speaking_club" ? VebinarImage : VideoCoursesImage
                }
                alt="vebinars"
              />
            </div>
            <span className={cn(styles["advantages__text"])}>
              {where === "speaking_club"
                ? t("speaking_club_advantages_items.vebinars")
                : t("main_advantages_items.video")}
            </span>
          </li>
          <li className={cn(styles["advantages__list-item"])}>
            <div className={cn(styles["advantages__image-block"])}>
              <Image
                className={cn(styles["advantages__image"])}
                src={
                  where === "speaking_club"
                    ? DictionaryImage
                    : SpeakingClubImage
                }
                alt="dictionary"
              />
            </div>
            <span className={cn(styles["advantages__text"])}>
              {where === "speaking_club"
                ? t("speaking_club_advantages_items.dictionary")
                : t("main_advantages_items.speaking")}
            </span>
          </li>
          <li className={cn(styles["advantages__list-item"])}>
            <div className={cn(styles["advantages__image-block"])}>
              <Image
                className={cn(styles["advantages__image"])}
                src={
                  where === "speaking_club" ? PronunciationImage : VebinarImage
                }
                alt="pronunciation"
              />
            </div>
            <span className={cn(styles["advantages__text"])}>
              {where === "speaking_club"
                ? t("speaking_club_advantages_items.pronunciation")
                : t("main_advantages_items.vebinars")}
            </span>
          </li>
          <li className={cn(styles["advantages__list-item"])}>
            <div className={cn(styles["advantages__image-block"])}>
              <Image
                className={cn(styles["advantages__image"])}
                src={
                  where === "speaking_club" ? GroupsImage : PrepareToExamImage
                }
                alt="groups"
              />
            </div>
            <span className={cn(styles["advantages__text"])}>
              {where === "speaking_club"
                ? t("speaking_club_advantages_items.language_environment")
                : t("main_advantages_items.prepare")}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdvantagesSpeakingClub;
