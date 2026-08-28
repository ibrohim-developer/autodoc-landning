import Images from "@/assets/images";
import { VacancyCard } from "@/components";
import {
  fadeUp,
  fadeUpCard,
  REVEAL_VIEWPORT,
  stagger,
} from "@/helper/motion";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Vacancies = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
      variants={stagger(0.12)}
      className="max-md:p-4 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Images.area})` }}
    >
      {/* Scrim stays static: fading it in mid-scroll would flash the photo
          bright under white text — the call AreasOfActivity makes. */}
      <div className="bg-black60 absolute top-0 left-0 w-full h-full"></div>
      <div className="relative z-1">
        <motion.div variants={fadeUp} className="title pt-4">
          {t("vacancies")}
        </motion.div>
        {/* Eight identical cards: a 0.08 walk keeps the grid reading as one
            wave instead of eight separate arrivals. */}
        <motion.div
          variants={stagger(0.08, 0.15)}
          className="grid grid-cols-4 min-[1300px]:max-[1700px]:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 mt-15"
        >
          {[...Array(8)].map((_, idx) => (
            <motion.div key={idx.toString()} variants={fadeUpCard}>
              <VacancyCard />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Vacancies;
