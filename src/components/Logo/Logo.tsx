import BlackLogo from "../../../public/common/logo-black-desktop.svg";
import MobileBlackLogo from '../../../public/common/mobile-logo-black.svg';
import TabletBlackLogo from '../../../public/common/tablet-logo-black.svg';
import WhiteLogo from "../../../public/common/logo-white-desktop.svg";
import { LogoProps } from "./Logo.props";
import Link from "next/link";
import styles from "./Logo.module.scss";
import { routes } from "../../../routes";
import cn from "classnames";

const LogoComponent = ({
  logoType,
  classname,
  ...props
}: LogoProps): JSX.Element => {
  return (
    <div className={cn(styles["logo"], classname)}>
      {logoType === "black" ? (
        <>
          <Link
            className={cn(styles["logo__link"], styles["desktop"])}
            href={routes.main}
          >
            <BlackLogo />
          </Link>
          <Link
            className={cn(styles["logo__link"], styles["tablet"])}
            href={routes.main}
          >
            <TabletBlackLogo />
          </Link>
          <Link
            className={cn(styles["logo__link"], styles["mobile"])}
            href={routes.main}
          >
            <MobileBlackLogo />
          </Link>
        </>
      ) : (
        <Link className={cn(styles["logo__link"])} href={routes.main}>
          <WhiteLogo />
        </Link>
      )}
    </div>
  );
};

export default LogoComponent;
