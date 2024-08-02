import WhitePhoneIcon from "../../../public/socials/phone.svg";
import BlackPhoneIcon from "../../../public/socials/black-phone.svg";
import cn from "classnames";
import styles from "./PhoneContact.module.scss";
import { PhoneContactProps } from "./PhoneContact.props";
import {links} from '../../../routes';

const PhoneContact = ({ styleType }: PhoneContactProps) => {
  return (
    <div className={cn(styles["phone"])}>
      <a className={cn(styles["phone__link"], {
        [styles["phone__link-white"]]: styleType === "white",
        [styles["phone__link-black"]]: styleType === "black"
      })} href={links.phone}>
        <div className={cn({
          [styles["phone__icon-black"]]: styleType === "black",
          [styles["phone__icon-white"]]: styleType === "white",
        })}>
          {styleType === "white" ? <WhitePhoneIcon /> : <BlackPhoneIcon />}
        </div>
        <span className={cn(styles["phone__text"], {
          [styles["phone__text-white"]]: styleType === "white",
          [styles["phone__text-black"]]: styleType === "black"
        })}>
          +49 6221 825 96 40
        </span>
      </a>
    </div>
  );
};

export default PhoneContact;
