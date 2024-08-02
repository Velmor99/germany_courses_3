"use client";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.scss";
import { TailSpin } from "react-loader-spinner";

const ButtonComponent = ({
  children,
  className,
  buttonType,
  onSubmit,
  isLoading,
  ...props
}: ButtonProps) => {
  return (
    <button
      onSubmit={onSubmit}
      className={cn(styles["button"], className, {
        [styles["green"]]: buttonType === "green",
        [styles["white"]]: buttonType === "white",
      })}
      {...props}
    >
      {isLoading ? (
        <div className={styles["spinner"]}>
          <TailSpin
            width="auto"
            height="auto"
            color={buttonType === "green" ? "#ffffff" : "#34D186"}
            ariaLabel="tail-spin-loading"
            radius="1"
            visible={true}
          />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default ButtonComponent;
