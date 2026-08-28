import Images from "@/assets/images";
import {
  fadeUp,
  fadeUpCard,
  fadeUpHero,
  overlayFade,
  REVEAL_VIEWPORT,
  stagger,
} from "@/helper/motion";
import { Feedback } from "@/sections";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();
  const list = [
    {
      img: Images.contacts1,
      title: t("address"),
      desc: t("addressCity"),
      info: t("headOffice"),
    },
    {
      img: Images.contacts2,
      title: t("phone"),
      desc: "+998 71 200-00-00",
      info: t("workingHours"),
    },
    {
      img: Images.contacts3,
      title: t("email"),
      desc: "info@autodoc.uz",
      info: t("respondWithin24Hours"),
    },
    {
      img: Images.contacts4,
      title: t("modeWork"),
      desc: t("workingHours"),
      info: t("tashkentTimezone"),
    },
  ];
  return (
    <>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger(0.15, 0.1)}
        className="max-lg:p-4 min-h-screen relative bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${Images.contactsBg}')` }}
      >
        <motion.div
          variants={overlayFade}
          className="bg-black60 absolute top-0 left-0 w-full h-full"
        />
        <div className="relative pt-50 z-1">
          <motion.div variants={fadeUpHero} className="title lg:mb-25 mb-6">
            {t("contacts")}
          </motion.div>
          <motion.div
            variants={fadeUpHero}
            className="lg:text-[60px] sm:text-[30px] max-w-350 lg:ml-31 leading-[110%] tracking-[-1.2px]"
          >
            {t("contactUsToDiscuss")}
          </motion.div>
        </div>
        {/* Its own variant root — the contact tiles sit far below the hero on
            desktop (xl:mt-72.5), so they wait for the scroll rather than
            inheriting the section's mount ladder. */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={REVEAL_VIEWPORT}
          variants={stagger(0.1)}
          className="grid lg:grid-cols-4 grid-cols-2 xl:mt-72.5 mt-12"
        >
          {list.map((item, idx) => (
            <motion.div
              key={idx.toString()}
              variants={fadeUpCard}
              className="xl:p-10 p-4 bg-blur"
            >
              <div className="md:w-18 w-14 md:h-17 h-13 flex items-center justify-center rounded-xl bg-green">
                <img src={item.img} className="max-md:max-w-[60%] max-md:max-h-[60%]" alt="" />
              </div>
              <div className="md:my-8 my-4 font-mono leading-[150%] tracking-[-0.48px] uppercase">
                {item.title}
              </div>
              <div className="xl:text-[40px] md:text-[24px] text-[20px] md:leading-[85%] tracking-[-1.2px] xl:min-h-42.5 md:min-h-20 max-md:mb-6">
                {item.desc}
              </div>
              <div className="font-mono md:leading-[200%] leading-[130%] tracking-[-0.48px] uppercase">
                {item.info}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <motion.img
        initial="hidden"
        whileInView="visible"
        viewport={REVEAL_VIEWPORT}
        variants={fadeUp}
        src={Images.map}
        className="w-full max-h-[80vh] object-cover"
        alt=""
      />
      <Feedback />
    </>
  );
};

export default Contacts;
