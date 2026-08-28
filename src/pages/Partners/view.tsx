import Images from "@/assets/images";
import {
  fadeUp,
  fadeUpHero,
  overlayFade,
  REVEAL_VIEWPORT,
  stagger,
} from "@/helper/motion";
import { Partners, PartnersOrganization } from "@/sections";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const PartnersPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger(0.15, 0.1)}
        className="max-lg:p-4 h-screen relative bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${Images.partnersBg}')` }}
      >
        <motion.div
          variants={overlayFade}
          className="bg-black60 absolute top-0 left-0 w-full h-full"
        />
        <div className="relative pt-50 z-1">
          <motion.div variants={fadeUpHero} className="title mb-15">
            {t("partners")}
          </motion.div>
          <motion.div
            variants={fadeUpHero}
            className="xl:text-[60px] md:text-[40px] text-[20px] max-w-350 lg:ml-31 sm:leading-[110%] tracking-[-1.2px]"
          >
            {t("ecosystemDesc")}
          </motion.div>
        </div>
      </motion.section>
      <section className="lg:p-52.5 md:p-20 px-4 py-12 min-[1280px]:max-[1700px]:py-25!">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={REVEAL_VIEWPORT}
          variants={fadeUp}
          className="min-[1400px]:w-275 m-auto text-center lg:text-[60px] md:text-[40px] text-[20px] sm:leading-[110%] flex items-center gap-x-18.5"
        >
          {t("governmentPartnerStatement")}
        </motion.div>
      </section>
      <Partners />
      <PartnersOrganization />
    </>
  );
};

export default PartnersPage;
