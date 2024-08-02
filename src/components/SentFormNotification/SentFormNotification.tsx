import cn from "classnames";
import styles from "./SentFormNotification.module.scss";
import { useTranslations } from "next-intl";

const SentFormNotification = () => {
  const t = useTranslations();
  return (
    <div className={cn(styles["notification"])}>
      <div className={cn(styles["notification__content"])}>
        <p className={cn(styles["notification__title"])}>
          {t("form.success_notification_title")}
        </p>
        <p className={cn(styles["notification__text"])}>
          {t("form.success_notification_text")}
        </p>
      </div>
    </div>
  );
};

export default SentFormNotification;
