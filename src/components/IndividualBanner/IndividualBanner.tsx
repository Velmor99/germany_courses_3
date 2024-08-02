import cn from "classnames";
import styles from "./IndividualBanner.module.scss";
import OlgaImage from "../../../public/common/olga-main.png";
import Image from "next/image";
import IndividualBannerTextContent from "./IndividualBannerTextContent/IndividualBannerTextContent";
import { IndividualBannerProps } from "./IndividualBanner.props";

const IndividualBanner = ({
  text,
  title,
  buttonText,
  where,
}: IndividualBannerProps) => {
  return (
    <div className={cn(styles["individual-banner"])}>
      <div
        className={cn(styles["background-line"], {
          [styles["background-line-main"]]: where === "main",
          [styles["background-line-consultation"]]: where === "consultation",
        })}
      >
        <div className={cn(styles["container"])}>
          <div className={cn(styles["individual-banner__content"])}>
            <div className={cn(styles["individual-banner__main-image-block"])}>
              <div className={cn(styles["individual-banner__image-block"])}>
                <Image
                  priority={true}
                  className={cn(styles["individual-banner__image"])}
                  src={OlgaImage}
                  alt="main"
                />
              </div>
              <div
                className={cn(styles["individual-banner__background-circle"])}
              ></div>
              <div
                className={cn(styles["individual-banner__mask-circle"])}
              ></div>
              <div
                className={cn(styles["individual-banner__small-white-circle"])}
              ></div>
            </div>

            <div>
              <IndividualBannerTextContent
                text={text}
                title={title}
                buttonText={buttonText}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndividualBanner;
