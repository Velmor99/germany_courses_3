"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

const Component = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{isOpen ? "opened" : "closed"}</p>
      <button onClick={() => setIsOpen(!isOpen)}>switch</button>
    </div>
  );
};

export default Component;
