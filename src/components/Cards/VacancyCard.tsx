import { useTranslation } from "react-i18next";

const VacancyCard = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="bg-blur md:p-10 p-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="max-xl:text-[12px] py-2.5 px-3 font-mono leading-[80%] tracking-[-0.48px] uppercase rounded-xl bg-green">
            {t("development")}
          </div>
          <div className="max-xl:text-[12px] py-2.5 px-3 font-mono leading-[80%] tracking-[-0.48px] uppercase rounded-xl bg-white10">
            {t("fullEmployment")}
          </div>
        </div>
        <div className="md:text-[40px] text-[18px] leading-[90%] tracking-[-1.2px] xl:mb-8 mb-4">
          {t("softwareEngineer")}
        </div>
        <div className="font-mono leading-[150%] uppercase max-md:text-[12px] tracking-[-0.48px]">
          {t("tashkent")}
        </div>
        <div className="my-23 min-[1300px]:max-[1700px]:my-8 max-xl:my-4 leading-[200%] font-mono tracking-[-0.48px] uppercase max-md:text-[12px]">
          {t("softwareEngineerDesc")}
        </div>
        <div className="bg-limon py-5.25 px-3 rounded-xl">
          <div className="font-mono leading-[80%] tracking-[-0.48px] uppercase max-md:text-[15px] mb-3">
            {t("requirements")}
          </div>
          <div className="flex flex-col gap-y-2.5">
            <div className="font-mono max-md:text-[14px] leading-[80%] max-2xl:leading-none tracking-[-0.48px]">
              → {t("softwareEngineerList1")}
            </div>
            <div className="font-mono max-md:text-[14px] leading-[80%] max-2xl:leading-none tracking-[-0.48px]">
              → {t("softwareEngineerList2")}
            </div>
            <div className="font-mono max-md:text-[14px] leading-[80%] max-2xl:leading-none tracking-[-0.48px]">
              → {t("softwareEngineerList3")}
            </div>
            <div className="font-mono max-md:text-[14px] leading-[80%] max-2xl:leading-none tracking-[-0.48px]">
              → {t("softwareEngineerList4")}
            </div>
          </div>
        </div>
      </div>
      <div className="md:my-7.5 my-4 mx-10 text-black text-center bg-white p-6 font-mono leading-[75%]">
        {t("reply")} →
      </div>
    </div>
  );
};

export default VacancyCard;
