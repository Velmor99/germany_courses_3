import cn from "classnames";
import styles from "./ContentWithPhoto.module.scss";
import { ContentWithPhotoProps } from "./ContentWithPhoto.props";
import MediumGreenWeIcon from "../../../public/common/medium_green_we.svg";
import TextComponent from "../Text/Text";
import { useTranslations } from "next-intl";

const ContentWithPhoto = ({
  partOne,
  partTwo,
  partOneOptions,
  partTwoOptions,
}: ContentWithPhotoProps) => {
  const t = useTranslations();
  return (
    <div className={cn(styles["content-with-photo"])}>
      <div className={cn(styles["container"])}>
        <div className={cn(styles["content-with-photo__content"])}>
          <div className={cn(styles["content-with-photo__image-block"])}>
            <div className={cn(styles["content-with-photo__image"])}></div>
            <div className={cn(styles["content-with-photo__icon-block"])}>
              <MediumGreenWeIcon />
            </div>
          </div>

          <div>
            <p className={cn(styles["content-with-photo__text-part-one"])}>
              <TextComponent
                text={t(partOne)}
                targets={partOneOptions.targets}
                textColor={partOneOptions.colorText}
                fontWeight={partOneOptions.fontWeight}
              />
            </p>
            <p className={cn(styles["content-with-photo__text-part-two"])}>
              <TextComponent
                text={t(partTwo)}
                targets={partTwoOptions.targets}
                textColor={partTwoOptions.colorText}
                fontWeight={partTwoOptions.fontWeight}
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentWithPhoto;
