import { routerPaths } from "@/app/routerPaths";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Trust = () => {
  const { t } = useTranslation();
  return (
    <section>
      <div className="flex max-lg:flex-col">
        <div className="p-6.75">
          <div className="title mb-4">{t("trustUs")}</div>
          <div className="max-lg:text-[24px] lg:max-xl:text-[32px] min-[1280px]:max-[1700px]:text-[50px] text-[60px] lg:leading-[110%] tracking-[-1.2px]">
            {t("ecosystemDesc")}
          </div>
        </div>
        <div className="sm:w-120 max-lg:mx-auto max-lg:mb-8 flex-none bg-blur p-10 ml-auto">
          <div className="flex flex-col gap-2">
            <div className="bg-limon py-5.25 px-3 rounded-xl flex items-end gap-4">
              <div className="text-[46px] leading-[0.4] font-mono">50+</div>
              <div className="uppercase leading-[0.9] font-mono">
                {t("50projects")} {t("implemented")}
              </div>
            </div>
            <div className="bg-limon py-5.25 px-3 rounded-xl flex items-end gap-4">
              <div className="text-[46px] leading-[0.4] font-mono">12+</div>
              <div className="uppercase leading-[0.9] font-mono">
                {t("governmentPartners")}
              </div>
            </div>
            <div className="bg-limon py-5.25 px-3 rounded-xl flex items-end gap-4">
              <div className="uppercase leading-[0.9] font-mono">
                {t("publicSector")}
              </div>
            </div>
            <div className="bg-limon py-5.25 px-3 rounded-xl flex items-end gap-4">
              <div className="uppercase leading-[0.4] font-mono">
                {t("commercialSector")}
              </div>
            </div>
          </div>
          <Link
            to={routerPaths.partners}
            className="sm:mt-12.5 mt-6 py-6 px-9 min-[1280px]:max-[1700px]:h-30 h-45 max-sm:h-auto flex items-center justify-center bg-white font-mono text-[20px] text-center text-black!"
          >
            {t("allPartners")} →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Trust;
