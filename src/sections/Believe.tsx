import { Images } from "@/assets/images";
import { fadeUp, REVEAL_VIEWPORT, stagger } from "@/helper/motion";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Believe = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
      variants={stagger(0.12)}
      className="xl:p-52.5 sm:p-20 min-[1280px]:max-[1700px]:py-25 max-sm:px-4 max-sm:py-12"
    >
      <div className="min-[1400px]:w-275 m-auto xl:text-[50px] sm:text-[32px] text-[20px] leading-none italic flex items-center sm:gap-x-18.5 gap-x-4">
        {/* Brackets animate through a wrapper, not on the <img> itself: motion
            writes an inline transform, which would override the mobile
            max-sm:scale-[0.4] class. */}
        <motion.div variants={fadeUp} className="flex-none">
          <img src={Images.containerLeft} className="max-sm:scale-[0.4]" alt="" />
        </motion.div>
        <motion.span variants={fadeUp}>{t("weBelieve")}</motion.span>
        <motion.div variants={fadeUp} className="flex-none">
          <img
            src={Images.containerRight}
            className="max-sm:scale-[0.4]"
            alt=""
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Believe;
