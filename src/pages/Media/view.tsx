import Images from "@/assets/images";
import { Pagination, ProjectCard } from "@/components";
import { newsMock } from "@/mock/news/data";
import { Reels, Video } from "@/sections";
import { useTranslation } from "react-i18next";

const Media = () => {
  const { t } = useTranslation();
  return (
    <>
      <section
        style={{ backgroundImage: `url('${Images.mediaBg}')` }}
        className="relative bg-cover bg-center bg-no-repeat lg:pb-35 max-lg:p-4"
      >
        <div className="bg-black60 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative md:pt-50 pt-30 z-1">
          <div className="title md:mb-25 mb-6">{t("mediaHub")}</div>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 max-lg:gap-4 mb-7.5">
            {newsMock.map((card, idx) => (
              <ProjectCard card={card} key={idx.toString()} />
            ))}
          </div>
          <Pagination className="mb-17.5" />
          <Reels />
        </div>
      </section>
      <Video />
    </>
  );
};

export default Media;
