import Images from "@/assets/images";
import { AdvertisingCard } from "@/components";
import {
  fadeUp,
  fadeUpCard,
  fadeUpHero,
  fadeUpItem,
  overlayFade,
  REVEAL_VIEWPORT,
  stagger,
} from "@/helper/motion";
import { Vacancies } from "@/sections";
import { motion } from "motion/react";
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
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger(0.15, 0.1)}
        className="max-lg:p-4 h-screen relative bg-cover bg-no-repeat md:bg-center bg-left"
        style={{ backgroundImage: `url('${Images.career}')` }}
      >
        <motion.div
          variants={overlayFade}
          className="bg-black60 absolute top-0 left-0 w-full h-full"
        />
        <div className="relative pt-50 z-1">
          <motion.div variants={fadeUpHero} className="title mb-15">
            {t("careerWithUs")}
          </motion.div>
          <motion.div
            variants={fadeUpHero}
            className="lg:text-[60px] md:text-[50px] text-[20px] max-w-350 xl:ml-31 md:leading-[110%] tracking-[-1.2px]"
          >
            {t("careerDesc")}
          </motion.div>
        </div>
      </motion.section>
      <section
        className="bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Images.paper})` }}
      >
        <div className="max-xl:px-4 lg:py-22.5 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={REVEAL_VIEWPORT}
            variants={stagger(0.12)}
            className="lg:w-240 px-5 lg:py-42.5 md:py-20 py-4 mx-auto bg-blur"
          >
            <motion.div
              variants={fadeUp}
              className="text-center text-black md:text-[35px] text-[20px] leading-[120%] tracking-[-1.2px]"
            >
              {t("careerDesc")}
            </motion.div>
            <motion.div
              variants={fadeUpItem}
              className="text-center text-black md:text-[35px] text-[20px] leading-[120%] tracking-[-1.2px]"
            >
              {t("nationalScaleProjectsDesc")}
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={REVEAL_VIEWPORT}
          variants={stagger(0.1)}
          className="grid min-[1300px]:grid-cols-4! md:grid-cols-2 max-xl:p-4 max-xl:gap-4"
        >
          {list.map((card, idx) => (
            <motion.div key={idx.toString()} variants={fadeUpCard}>
              <AdvertisingCard card={card} />
            </motion.div>
          ))}
        </motion.div>
        <Vacancies />
      </section>
    </>
  );
};

export default Career;
