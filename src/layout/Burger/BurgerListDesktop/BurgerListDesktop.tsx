import styles from "./BurgerListDesktop.module.scss";
import cn from "classnames";
import { routes } from "../../../../routes";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { BurgerMenuDesktopProps } from "./BurgerListDesktop.props";

const navLinks = [
  { link: routes.main, name: "footer_links.language_school" },
  { link: routes.resume, name: "footer_links.cv_writing" },
  {
    link: routes.prepareToTest,
    name: "footer_links.prepare_to_technical_language_test",
  },
  // { link: routes.students, name: "footer_links.admission_to_universities" },
  { link: routes.consultation, name: "footer_links.personal_consultation" },
  { link: routes.speakingClub, name: "footer_links.conversational_club" },
  { link: routes.freeCourse, name: "footer_links.free_information_course" },
  { link: routes.documents, name: "footer_links.preparing_documents" },
];

const BurgerListDesktop = ({ isOpened, setMenu }: BurgerMenuDesktopProps) => {
  const t = useTranslations();
  const pathname = usePathname();
  const navLink = pathname.split("/");

  const variants = {
    visible: {
      height: "auto",
      padding: ["20px", "20px", "30px", "20px"],
      transition: {
        ease: "linear",
      },
    },
    hidden: {
      height: 0,
      padding: 0,
      overflow: "hidden",
      transition: {
        delay: 0.15,
      },
    },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      transition: {
        delay: 0.25,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.05,
      },
    },
  };

  return (
    <motion.ul
      // layout
      variants={variants}
      animate={isOpened ? "visible" : "hidden"}
      className={styles["nav__menu"]}
    >
      {navLinks.map((item, index) => (
        <motion.li
          animate={isOpened ? "visible" : "hidden"}
          variants={variantsChildren}
          className={styles["nav__link-item"]}
          onClick={() => setMenu(false)}
          // transition={{duration: 0.25, linear: "ease", delay: 0.25}}
          key={index}
        >
          <Link
            className={cn(styles["nav__link"], {
              [styles["nav__link-active"]]: navLink.includes(item.link),
            })}
            href={item.link}
          >
            {t(item.name)}
          </Link>
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default BurgerListDesktop;
