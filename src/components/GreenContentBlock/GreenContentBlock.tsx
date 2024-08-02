import cn from "classnames";
import styles from "./GreenContentBlock.module.scss";
import { GreenContentProps } from "./GreenContentBlock.props";
import { useTranslations } from "next-intl";
// import MediumWhiteWeIcon from "../../../public/common/medium_white_we.svg";
import TextComponent from "../Text/Text";
// import TextComponent from "../Text/Text";

const GreenContentBlock = ({
  content,
  revers,
  optionsForTextWithPhoto,
  optionsForTextBelowPhoto,
}: GreenContentProps) => {
  const t = useTranslations();
  return (
    <div className={cn(styles["green-content"])}>
      {/* <TextComponent text={t(`${content}.below_photo`)} targets={["Welingua"]} textColor="white" fontSize={700} /> */}
      <div className={cn(styles["green-content__green-diagonal-background"])}>
        <div
          className={cn(styles["green-content__green-square-background"], {
            [styles["green-content__main-background"]]:
              content === "main_green_content",
          })}
        >
          <div className={cn(styles["container"])}>
            <div className={cn(styles["green-content__text-with-photo-block"])}>
              <p className={cn(styles["green-content__text-with-photo"])}>
                <TextComponent
                  text={t(`${content}.with_photo`)}
                  targets={optionsForTextWithPhoto.targets}
                  textColor={optionsForTextWithPhoto.colorText}
                  fontWeight={optionsForTextWithPhoto.fontWeight}
                />
              </p>
              <div
                style={revers ? { order: -1 } : { order: 1 }}
                className={cn(styles["green-content__image-block"], {
                  [styles["main-image"]]: content === "main_green_content",
                  [styles["consultation-image"]]:
                    content === "consultation_green_content",
                  [styles["documents-image"]]:
                    content === "documents_green_content",
                  [styles["prepare-to-test-image"]]:
                    content === "prepare_to_test_green_content",
                  [styles["resume-image"]]: content === "resume_green_content",
                  [styles["resume-image-desktop"]]:
                    content === "resume_green_content_desktop",
                  [styles["speaking-club-image"]]:
                    content === "speaking_club_green_content",
                  [styles["students-image"]]:
                    content === "students_green_content",
                })}
              >
                <div className={cn(styles["green-content__image"])}></div>
                <div className={cn(styles["green-content__icon-block"])}>
                  {/* <MediumWhiteWeIcon /> */}
                </div>
              </div>
            </div>
            <p className={cn(styles["green-content__text-below-photo"])}>
              <TextComponent
                text={t(`${content}.below_photo`)}
                targets={optionsForTextBelowPhoto.targets}
                textColor={optionsForTextBelowPhoto.colorText}
                fontWeight={optionsForTextBelowPhoto.fontWeight}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenContentBlock;
