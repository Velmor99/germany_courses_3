import styles from "./FormWe.module.scss";
import cn from "classnames";
import SmallGreenWeIcon from "../../../../public/common/form/small_green_we.svg";
import SmallWhiteWeIcon from "../../../../public/common/form/small_white_we.svg";
import MediumGreenWeIcon from "../../../../public/common/form/medium_green_we.svg";
import MediumWhiteWeIcon from "../../../../public/common/form/medium_white_we.svg";
import LargeGreenWeIcon from "../../../../public/common/form/large_green_we.svg";
import LargeWhiteWeIcon from "../../../../public/common/form/large_white_we.svg";
import { FormWeProps } from "./FormWe.props";

const FormWe = ({ iconStyle }: FormWeProps) => {
  return (
    <>
      <div className={cn(styles["mobile"])}>
        {iconStyle === "green" ? <SmallWhiteWeIcon /> : <SmallGreenWeIcon />}
      </div>
      <div className={cn(styles["tablet"])}>
        {iconStyle === "green" ? <MediumWhiteWeIcon /> : <MediumGreenWeIcon />}
      </div>
      <div className={cn(styles["desktop"])}>
        {iconStyle === "green" ? <LargeWhiteWeIcon /> : <LargeGreenWeIcon />}
      </div>
    </>
  );
};

export default FormWe;
