import Images from "@/assets/images";
import { AdvertisingCard } from "@/components";
import { Vacancies } from "@/sections";
import { useTranslation } from "react-i18next";

const Career = () => {
  const { t } = useTranslation();
  const list = [
    {
      img: Images.advetising1,
      title: t("nationalScaleProjects"),
      desc: t("nationalScaleProjectsDesc"),
    },
    {
      img: Images.advetising2,
      title: t("strongTeam"),
      desc: t("strongTeamDesc"),
    },
    {
      img: Images.advetising3,
      title: t("growthAndDevelopment"),
      desc: t("growthAndDevelopmentDesc"),
    },
    {
      img: Images.advetising4,
      title: t("modernWorkEnvironment"),
      desc: t("modernWorkEnvironmentDesc"),
    },
  ];
  return (
    <>
      <section
        className="max-lg:p-4 h-screen relative bg-cover bg-no-repeat md:bg-center bg-left"
        style={{ backgroundImage: `url('${Images.career}')` }}
      >
        <div className="bg-black60 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative pt-50 z-1">
          <div className="title mb-15">{t("careerWithUs")}</div>
          <div className="lg:text-[60px] md:text-[50px] text-[20px] max-w-350 xl:ml-31 md:leading-[110%] tracking-[-1.2px]">
            {t("careerDesc")}
          </div>
        </div>
      </section>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Images.paper})` }}
      >
        <div className="max-xl:px-4 lg:py-22.5 py-12">
          <div className="lg:w-240 px-5 lg:py-42.5 md:py-20 py-4 mx-auto bg-blur">
            <div className="text-center text-black md:text-[35px] text-[20px] leading-[120%] tracking-[-1.2px]">
              {t("careerDesc")}
            </div>
            <div className="text-center text-black md:text-[35px] text-[20px] leading-[120%] tracking-[-1.2px]">
              {t("nationalScaleProjectsDesc")}
            </div>
          </div>
        </div>
        <div className="grid min-[1300px]:grid-cols-4! md:grid-cols-2 max-xl:p-4 max-xl:gap-4">
          {list.map((card, idx) => (
            <AdvertisingCard key={idx.toString()} card={card} />
          ))}
        </div>
        <Vacancies />
      </section>
    </>
  );
};

export default Career;
