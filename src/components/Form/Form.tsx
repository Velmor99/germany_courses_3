"use client";
import { FormProps } from "./Form.props";
import styles from "./Form.module.scss";
import cn from "classnames";
import { useTranslations } from "next-intl";
import { InputComponent } from "../Input/Input";
import {
  SubmitHandler,
  useForm,
  Controller,
  FieldError,
} from "react-hook-form";
import { IForm, IFormResponse } from "./Form.interfaces";
import { useEffect, useState } from "react";
import { routes } from "../../../routes";
import Link from "next/link";
import ButtonComponent from "../Button/Button";
import CountrySelect from "../CountrySelect/CountrySelect";
import { validatePhoneNumber } from "@/utils/validatePhoneNumber";
import { CountryCode } from "libphonenumber-js";
import { yupResolver } from "../../../node_modules/@hookform/resolvers/yup";
import { schema } from "@/utils/yupValidationForm";
// import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { sendMail } from "../../service/mailgun";

// import PhoneInput from "react-phone-number-input";
import FormWe from "./FormWe/FormWe";
import SentFormNotification from "../SentFormNotification/SentFormNotification";
import { MessagesSendResult } from "mailgun.js";
import { motion } from "framer-motion";
// import mailer from '../../utils/nodemailer';

export const FormComponent = ({
  title,
  styleType,
  className,
  ...props
}: FormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>({
    resolver: yupResolver(schema),
  });
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [isPhoneCorrect, setIsPhoneCorrect] = useState<FieldError | null>(null);
  const [country, setCountry] = useState<string>("UA");
  const t = useTranslations();
  const pathname = usePathname();

  useEffect(() => {
    setCheckbox(false);
  }, []);

  const onSubmit: SubmitHandler<IForm> = async (formData: IForm) => {
    const validatedNumber = validatePhoneNumber(
      String(formData.phone),
      country as CountryCode
    );
    if (!validatedNumber) {
      setIsPhoneCorrect({
        type: "validation",
        message: "incorrect phone number",
      });
      return;
    } else {
      setIsPhoneCorrect(null);
    }
    setLoading(true);

    const res: MessagesSendResult = await sendMail({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      country: country,
      webpage: `${window.location.origin}${pathname}`,
    });
    if (res.status === 200) {
      setIsSuccess(true);
    }
  };

  const changeCountry = (country: string) => {
    setCountry(country);
  };

  return (
    <div className={cn(styles["container"])}>
      <form onSubmit={handleSubmit(onSubmit)} id="form">
        <div
          className={cn(styles["form"], className, {
            [styles["form__green"]]: styleType === "green",
            [styles["form__white"]]: styleType === "white",
            [styles["form__success"]]: isSuccess,
          })}
          {...props}
        >
          <h2
            className={cn(styles["form__title"], {
              [styles["form__title-white"]]: styleType === "green",
              [styles["form__title-green"]]: styleType === "white",
            })}
          >
            {t(title)}
          </h2>

          <InputComponent
            type={"text"}
            {...register("name")}
            placeholder={t("form.name_placeholder")}
            className={styles["form__input"]}
            error={errors.name}
          />

          <InputComponent
            type={"text"}
            {...register("email")}
            placeholder={t("form.email_placeholder")}
            className={styles["form__input"]}
            error={errors.email}
          />

          <div className={cn(styles["form__phone-input"])}>
            <CountrySelect
              callback={changeCountry}
              className={styles["form__select"]}
            />
            <InputComponent
              type={"tel"}
              // onChange={(e) => handleValidatePhoneNumber(e)}
              {...register("phone")}
              className={styles["form__input-phone"]}
              error={errors.phone || isPhoneCorrect}
            />
          </div>

          <label className={cn(styles["form__checkbox-label"])}>
            <InputComponent
              className={styles["form__checkbox"]}
              type={"checkbox"}
              checked={checkbox}
              onChange={() => setCheckbox(!checkbox)}
            />
            <p
              className={cn(styles["form__checkbox-text"], {
                [styles["form__checkbox-text--active"]]: checkbox === true,
              })}
            >
              <span className={cn(styles["form__text"])}>{`${t(
                "form.press_on_button"
              )} `}</span>
              <br />
              <Link
                className={cn(styles["form__link"], {
                  [styles["form__link-green"]]: styleType === "white",
                  [styles["form__link-white"]]: styleType === "green",
                })}
                href={routes.publicOffer}
              >
                {t("form.link_of_public_offer")}
              </Link>
              <span className={cn(styles["form__text"])}>{` ${t(
                "form.and"
              )} `}</span>
              <Link
                className={cn(styles["form__link"], {
                  [styles["form__link-green"]]: styleType === "white",
                  [styles["form__link-white"]]: styleType === "green",
                })}
                href={routes.privacyPolicy}
              >
                {t("form.link_of_privacy_policy")}
              </Link>
            </p>
          </label>

          <ButtonComponent
            type="submit"
            disabled={!checkbox || loading}
            buttonType={styleType === "white" ? "green" : "white"}
            className={cn(styles["form__submit-button"])}
            isLoading={loading}
          >
            {t("form.main_submit_button")}
          </ButtonComponent>

          <div
            className={cn(styles["form__we-icon"], {
              [styles["form__we-icon-green"]]: styleType === "white",
            })}
          >
            <FormWe iconStyle={styleType} />
          </div>
          {isSuccess && (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ ease: "linear", duration: 0.25 }}
            >
              <SentFormNotification />
            </motion.div>
          )}
        </div>
      </form>
    </div>
  );
};
