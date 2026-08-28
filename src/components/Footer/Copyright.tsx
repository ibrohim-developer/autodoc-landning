import { useTranslation } from "react-i18next";

const Copyright = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-white sm:px-8 px-1 pt-1 flex items-center xl:justify-between justify-center">
      <div className="font-mono uppercase text-black max-sm:text-[12px]">
        © 2026 AUTODOC HOLDING. {t("allRightsReserved")}
      </div>
      <div className="font-mono uppercase text-black max-xl:hidden">
        {t("privacyPolicy")}
      </div>
      <div className="font-mono uppercase text-black max-xl:hidden">
        {t("termsOfUse")}
      </div>
      <div className="font-mono uppercase text-black max-xl:hidden">{t("addressCity")}</div>
    </div>
  );
};

export default Copyright;
