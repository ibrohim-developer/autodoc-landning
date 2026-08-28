import { routerPaths } from "@/app/routerPaths";
import Images from "@/assets/images";
import { HistoryProjectCard } from "@/components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const History = () => {
  const { t } = useTranslation();
  const timelineYears = [
    {
      year: "2022",
      title: t("foundingCompany"),
      desc: t("foundingCompanyDesc"),
      detail: t("foundingCompanyDetail"),
      photo: Images.BlackLogoHolding,
    },
    {
      year: "2022",
      title: t("firstProject"),
      desc: t("firstProjectDesc"),
      detail: t("firstProjectDetail"),
      photo: Images.FirstProject,
    },
    {
      year: "2023",
      title: t("governmentPrivatePartnership"),
      desc: t("governmentPrivatePartnershipDesc"),
      detail: t("governmentPrivatePartnershipDetail"),
      photo: Images.Expansion,
    },
    {
      year: "2023",
      title: t("infrastructureDevelopment"),
      desc: t("infrastructureDevelopmentDesc"),
      detail: t("infrastructureDevelopmentDetail"),
      photo: Images.Infra,
    },
    {
      year: "2025",
      title: t("expensionDirections"),
      desc: t("expensionDirectionsDesc"),
      detail: t("expensionDirectionsDetail"),
      photo: Images.SafeRoad,
    },
    {
      year: "2025",
      title: t("formationHolding"),
      desc: t("formationHoldingDesc"),
      detail: t("formationHoldingDetail"),
      photo: Images.Infratuzilma,
    },
    {
      year: "2025",
      title: t("ecoSticker"),
      desc: t("ecoStickerDesc"),
      detail: t("ecoStickerDetail"),
      photo: Images.EcoSticker,
    },
  ];
  return (
    <>
      <section
        className="max-md:p-4 min-h-screen relative bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${Images.historyHolding}')` }}
      >
        <div className="bg-black60 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative md:pt-50 pt-30 z-1">
          <div className="title">{t("historyHolding")}</div>
          <div className="grid min-[1300px]:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-y-30 gap-y-12 md:mt-50 mt-20">
            {timelineYears.map((card, idx) => (
              <HistoryProjectCard card={card} key={idx.toString()} />
            ))}
            <Link
              to={routerPaths.media}
              className="bg-blur p-10 flex flex-col gap-8 items-center justify-center"
            >
              <div className="text-[32px] leading-[1.1]">
                {t("futureWeBelieveIn")}
              </div>
              <img src={Images.arrowRight} className="ml-auto" alt="" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;
