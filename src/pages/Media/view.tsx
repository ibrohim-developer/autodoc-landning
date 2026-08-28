import Images from "@/assets/images";
import { Pagination, ProjectCard } from "@/components";
import {
  fadeUpCard,
  fadeUpHero,
  fadeUpItem,
  overlayFade,
  REVEAL_VIEWPORT,
  stagger,
} from "@/helper/motion";
import { newsMock } from "@/mock/news/data";
import { Reels, Video } from "@/sections";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Media = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger(0.15, 0.1)}
        style={{ backgroundImage: `url('${Images.mediaBg}')` }}
        className="relative bg-cover bg-center bg-no-repeat lg:pb-35 max-lg:p-4"
      >
        <motion.div
          variants={overlayFade}
          className="bg-black60 absolute top-0 left-0 w-full h-full"
        />
        <div className="relative md:pt-50 pt-30 z-1">
          <motion.div variants={fadeUpHero} className="title md:mb-25 mb-6">
            {t("mediaHub")}
          </motion.div>
          {/* Separate variant root: the article grid is long, and only its
              first row is on screen when the page mounts. */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={REVEAL_VIEWPORT}
            variants={stagger(0.08)}
            className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 max-lg:gap-4 mb-7.5"
          >
            {newsMock.map((card, idx) => (
              <motion.div key={idx.toString()} variants={fadeUpCard}>
                <ProjectCard card={card} />
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={REVEAL_VIEWPORT}
            variants={fadeUpItem}
          >
            <Pagination className="mb-17.5" />
          </motion.div>
          <Reels />
        </div>
      </motion.section>
      <Video />
    </>
  );
};

export default Media;
