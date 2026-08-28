import Images from "@/assets/images";
import { AreasOfActivity } from "@/sections";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        className="max-sm:p-4 h-[80vh] relative bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${Images.projects}')` }}
      >
        <div className="bg-black60 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative pt-50 z-1">
          <div className="title mb-15">{t("projects")}</div>
          <div className="sm:text-[60px] text-[20px] max-w-350 sm:ml-31 leading-[110%] tracking-[-1.2px]">
            {t("portfolioDesc")}
          </div>
        </div>
      </section>
      <AreasOfActivity />
    </>
  );
};

export default Projects;
