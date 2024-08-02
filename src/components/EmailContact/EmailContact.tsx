import WhiteEmailIcon from '../../../public/socials/email.svg';
import BlackEmailIcon from '../../../public/socials/black-mail.svg';
import cn from "classnames";
import styles from "./EmailContact.module.scss";
import { EmailContactProps } from "./EmailContact.props";
import {links} from '../../../routes';

const EmailContact = ({ styleType }: EmailContactProps) => {
  return (
    <div className={cn(styles["email"])}>
      <a className={cn(styles["email__link"], {
        [styles["email__link-white"]]: styleType === "white",
        [styles["email__link-black"]]: styleType === "black"
      })} href={links.email}>
        <div className={cn({
          [styles["email__icon-black"]]: styleType === "black",
          [styles["email__icon-white"]]: styleType === "white",
        })}>
          {styleType === "white" ? <WhiteEmailIcon /> : <BlackEmailIcon />}
        </div>
        <span className={cn(styles["email__text"], {
          [styles["email__text-white"]]: styleType === "white",
          [styles["email__text-black"]]: styleType === "black"
        })}>
          weinfo@welingua.com
        </span>
      </a>
    </div>
  );
};

export default EmailContact;
