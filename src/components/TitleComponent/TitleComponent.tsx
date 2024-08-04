import { useTranslations } from "next-intl";
import cn from "classnames";
import styles from "./TitleComponent.module.scss";
import { TitleComponentProps } from "./TitleComponent.props";

const TitleComponent = ({ title }: TitleComponentProps) => {
  const t = useTranslations();
  return (
    <div className={cn(styles["container"])}>
      <h3 className={cn(styles["title"])}>{t(title)}</h3>
    </div>
  );
};

export default TitleComponent;
