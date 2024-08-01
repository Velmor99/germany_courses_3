"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Component from "@/components/component/Component";

const ClientPage = () => {
  const [counter, setCounter] = useState(0);
  const t = useTranslations();
  return (
    <div>
      <p>{t("title")}</p>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>increase</button>
      <button onClick={() => setCounter(counter - 1)}>decrease</button>
      <Component></Component>
    </div>
  );
};

export default ClientPage;
