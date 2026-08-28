import Images from "@/assets/images";
import { fadeUpHero, overlayFade, stagger } from "@/helper/motion";
import { AreasOfActivity } from "@/sections";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Above the fold on arrival, so this ladder runs off `animate` on mount.
          AreasOfActivity below carries its own whileInView reveal. */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger(0.15, 0.1)}
        className="max-sm:p-4 h-[80vh] relative bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${Images.projects}')` }}
      >
        <motion.div
          variants={overlayFade}
          className="bg-black60 absolute top-0 left-0 w-full h-full"
        />
        <div className="relative pt-50 z-1">
          <motion.div variants={fadeUpHero} className="title mb-15">
            {t("projects")}
          </motion.div>
          <motion.div
            variants={fadeUpHero}
            className="sm:text-[60px] text-[20px] max-w-350 sm:ml-31 leading-[110%] tracking-[-1.2px]"
          >
            {t("portfolioDesc")}
          </motion.div>
        </div>
      </motion.section>
      <AreasOfActivity />
    </>
  );
};

export default Projects;
