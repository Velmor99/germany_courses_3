import ArrowIcon from "../../../../../public/common/localization_arrow.svg";
import BurgerIcon from "../../../../../public/common/burger.svg";
import CloseIcon from "../../../../../public/common/close.svg";
import cn from "classnames";
import styles from "./BurgerMenuButton.module.scss";
import { BurgerButtonMenuProps } from "./BurgerMenuButton.props";
import { useState } from "react";
import BurgerListDesktop from "../BurgerListDesktop/BurgerListDesktop";
import { useTranslations } from "next-intl";

const BurgerMenuButton = ({ changeMenu, isShowed }: BurgerButtonMenuProps) => {
  const [desktopNavMenu, setDesktopNavMenu] = useState(false);
  const t = useTranslations();
  return (
    <div className={cn(styles["menu-button"])}>
      <div className={cn(styles["menu-button__desktop"])}>
        <button
          onClick={() => setDesktopNavMenu(!desktopNavMenu)}
          className={cn(styles["menu-button__desktop-button"])}
        >
          <span className={cn(styles["menu-button__desktop-button-text"])}>
            {t("service")}
          </span>
          <div className={cn(styles["menu-button__desktop-button-icon"])}>
            <ArrowIcon />
          </div>
        </button>
        <BurgerListDesktop isOpened={desktopNavMenu} />
      </div>
      <div className={cn(styles["menu-button__mobile"])}>
        <button
          onClick={changeMenu}
          className={cn(styles["menu-button__mobile-button"])}
        >
          {isShowed ? <CloseIcon /> : <BurgerIcon />}
        </button>
      </div>
    </div>
  );
};

export default BurgerMenuButton;
