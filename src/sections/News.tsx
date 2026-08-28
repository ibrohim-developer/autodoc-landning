import { routerPaths } from "@/app/routerPaths";
import Images from "@/assets/images";
import { ProjectCard } from "@/components";
// import InstagramReelCard from "@/components/Cards/InstagramReelsCard/view";
import { fadeUp, fadeUpCard, REVEAL_VIEWPORT, stagger } from "@/helper/motion";
import { newsMock } from "@/mock/news/data";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
      variants={stagger(0.12)}
      className="max-sm:p-4 min-h-screen flex flex-col items-start relative bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('${Images.pattern}'), url('${Images.media2}')`,
      }}
    >
      <motion.div variants={fadeUp} className="title max-lg:my-8">
        {t("holdingNews")}
      </motion.div>
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
          /* The reveal wrapper takes over the grid cell, so it carries the
             bottom-alignment the card used to do itself. */
          <motion.div
            key={idx.toString()}
            variants={fadeUpCard}
            className="flex flex-col justify-end"
          >
            <ProjectCard card={item} />
          </motion.div>
        ))}
        <motion.div variants={fadeUpCard} className="flex flex-col xl:h-[70%] h-full mt-auto">
          <Link
            to={routerPaths.media}
            className="bg-blur h-full p-4 flex gap-8 items-center justify-center"
          >
            <div className="text-[32px] leading-[1.1]">
              {t("goToMedia")} <br />
              {t("mediaHub")}
            </div>
            <img src={Images.arrowRight} alt="" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default News;
