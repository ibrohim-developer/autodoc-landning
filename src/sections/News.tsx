import { routerPaths } from "@/app/routerPaths";
import Images from "@/assets/images";
import { ProjectCard } from "@/components";
// import InstagramReelCard from "@/components/Cards/InstagramReelsCard/view";
import { newsMock } from "@/mock/news/data";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();
  return (
    <section
      className="max-sm:p-4 min-h-screen flex flex-col items-start relative bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('${Images.pattern}'), url('${Images.media2}')`,
      }}
    >
      <div className="title max-lg:my-8">{t("holdingNews")}</div>
      <div className="grid xl:grid-cols-4 sm:grid-cols-2 w-full mt-auto">
        {/* <div className="flex flex-col justify-end">
          <InstagramReelCard
            url="https://www.instagram.com/reel/DcQ8QJ4hAaC/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=="
            width={"100%"}
            // height={"700px"}
            className="2xl:h-175 xl:h-136 lg:h-160 md:h-144 h-132"
          />
          <img src={Images.reels} className="w-full" alt="" />
        </div> */}
        {newsMock.slice(0, 3).map((item, idx) => (
          <ProjectCard
            key={idx.toString()}
            card={item}
            className="flex flex-col justify-end"
          />
        ))}
        <Link
          to={routerPaths.media}
          className="bg-blur xl:h-[70%] h-full mt-auto p-4 flex gap-8 items-center justify-center"
        >
          <div className="text-[32px] leading-[1.1]">
            {t("goToMedia")} <br />
            {t("mediaHub")}
          </div>
          <img src={Images.arrowRight} alt="" />
        </Link>
      </div>
    </section>
  );
};

export default News;
