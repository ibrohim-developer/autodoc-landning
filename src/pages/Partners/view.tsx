import Images from "@/assets/images";
import { Partners, PartnersOrganization } from "@/sections";
import { useTranslation } from "react-i18next";

const PartnersPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        className="max-lg:p-4 h-screen relative bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${Images.partnersBg}')` }}
      >
        <div className="bg-black60 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative pt-50 z-1">
          <div className="title mb-15">{t("partners")}</div>
          <div className="xl:text-[60px] md:text-[40px] text-[20px] max-w-350 lg:ml-31 sm:leading-[110%] tracking-[-1.2px]">
            {t("ecosystemDesc")}
          </div>
        </div>
      </section>
      <section className="lg:p-52.5 md:p-20 px-4 py-12 min-[1280px]:max-[1700px]:py-25!">
        <div className="min-[1400px]:w-275 m-auto text-center lg:text-[60px] md:text-[40px] text-[20px] sm:leading-[110%] flex items-center gap-x-18.5">
          {t("governmentPartnerStatement")}
        </div>
      </section>
      <Partners />
      <PartnersOrganization />
    </>
  );
};

export default PartnersPage;
