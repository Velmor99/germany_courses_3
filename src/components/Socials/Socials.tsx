import cn from 'classnames';
import styles from './Socials.module.scss';
import TelegramIcon from "../../../public/socials/telegram.svg";
import WhatsappIcon from "../../../public/socials/whatsapp.svg";
import YoutubeIcon from "../../../public/socials/youtube.svg";
import InstagramIcon from "../../../public/socials/instagram.svg";
import WhiteTelegramIcon from "../../../public/socials/white_telegram.svg";
import WhiteYoutubeIcon from "../../../public/socials/white_youtube.svg";
import WhiteInstagramIcon from "../../../public/socials/white_instagram.svg";
import WhiteWhatsappIcon from '../../../public/socials/white_whatsapp.svg';
import { SocialsProps } from "./Socials.props";
import { links } from "../../../routes";

const Socials = ({ iconsType }: SocialsProps): JSX.Element => {
  return (
    <ul className={cn(styles["socials__list"])}>
      <li className={cn(styles["socials__list-item"])}>
        <a className={cn(styles["socials__link"])} target="_blank" href={links.telegram}>
          {iconsType === "black" ? <TelegramIcon /> : <WhiteTelegramIcon />}
        </a>
      </li>
      <li className={cn(styles["socials__list-item"])}>
        <a className={cn(styles["socials__link"])} target="_blank" href={links.whatsapp}>
        {iconsType === "black" ? <WhatsappIcon /> : <WhiteWhatsappIcon />}
        </a>
      </li>
      <li className={cn(styles["socials__list-item"])}>
        <a className={cn(styles["socials__link"])} target="_blank" href={links.youtube}>
          {iconsType === "black" ? <YoutubeIcon /> : <WhiteYoutubeIcon />}
        </a>
      </li>
      <li className={cn(styles["socials__list-item"])}>
        <a className={cn(styles["socials__link"])} target="_blank" href={links.instagram}>
          {iconsType === "black" ? <InstagramIcon /> : <WhiteInstagramIcon />}
        </a>
      </li>
    </ul>
  );
};

export default Socials;
