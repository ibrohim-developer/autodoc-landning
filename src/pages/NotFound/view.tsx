import Images from "@/assets/images";
import { Navbar } from "@/components";
import Copyright from "@/components/Footer/Copyright";
import { fadeUpHero, fadeUpItem, overlayFade, stagger } from "@/helper/motion";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={stagger(0.15, 0.1)}
      style={{ backgroundImage: `url('${Images.ofis}')` }}
      className="bg-cover bg-center bg-no-repeat h-screen relative flex items-center justify-center"
    >
      <Navbar />
      <motion.div
        variants={overlayFade}
        className="bg-black60 absolute top-0 left-0 w-full h-full"
      />
      <div className="relative z-1">
        <motion.div
          variants={fadeUpHero}
          className="text-[400px] leading-[70%] font-bebas"
        >
          404
        </motion.div>
        <motion.div
          variants={fadeUpHero}
          className="text-[60px] leading-[110%] tracking-[-1.2px]"
        >
          {t("pageNotFound")}
        </motion.div>
      </div>
      <motion.div
        variants={fadeUpItem}
        className="absolute bottom-10 right-5 flex items-center justify-between gap-8 bg-blur p-10"
      >
        <div className="leading-[150%] tracking-[-0.48px] font-mono uppercase">
          {t("cookieNotice")}
        </div>
        <div className="bg-white py-6 px-9 font-mono text-black text-[20px] leading-[80%] tracking-[-0.48px] text-center">
          {t("ok")}
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full z-1">
        <Copyright />
      </div>
    </motion.section>
  );
};

export default NotFound;
