import Images from "@/assets/images";
import { FeedbackForm } from "@/forms";
import {
  fadeUp,
  fadeUpItem,
  REVEAL_VIEWPORT,
  stagger,
} from "@/helper/motion";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Feedback = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
      variants={stagger(0.12)}
      style={{ backgroundImage: `url(${Images.feedbackBg})` }}
      className="relative bg-cover bg-center bg-no-repeat"
    >
      {/* Scrim stays static: fading it in mid-scroll would flash the photo
          bright under white text — the call AreasOfActivity makes. */}
      <div className="bg-black60 absolute top-0 left-0 w-full h-full"></div>
      <div className="relative z-1">
        <div className="flex flex-col items-center justify-center md:py-20 py-12">
          <motion.div variants={fadeUp} className="title mb-6">
            {t("feedback")}
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="md:text-[60px] text-[20px] leading-[110%] tracking-[-1.2px] text-center md:mb-22.5 mb-10"
          >
            {t("contactYouShortly")}
          </motion.div>
          {/* The form arrives as one block — animating each field would read as
              a loading state on something the user is meant to fill in. */}
          <motion.div variants={fadeUpItem}>
            <FeedbackForm />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Feedback;
