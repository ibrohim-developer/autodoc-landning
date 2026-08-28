import { routerPaths } from "@/app/routerPaths";
import { fadeUp, fadeUpItem, REVEAL_VIEWPORT, stagger } from "@/helper/motion";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Trust = () => {
  const { t } = useTranslation();

  /* `leading` is per-item because the original markup set 0.4 on the last chip
     only — carried over as-is rather than normalised. */
  const stats = [
    {
      value: "50+",
      label: `${t("50projects")} ${t("implemented")}`,
      leading: "leading-[0.9]",
    },
    { value: "12+", label: t("governmentPartners"), leading: "leading-[0.9]" },
    { label: t("publicSector"), leading: "leading-[0.9]" },
    { label: t("commercialSector"), leading: "leading-[0.4]" },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
      variants={stagger(0.15)}
    >
      <div className="flex max-lg:flex-col">
        <motion.div variants={fadeUp} className="p-6.75">
          <div className="title mb-4">{t("trustUs")}</div>
          <div className="max-lg:text-[24px] lg:max-xl:text-[32px] min-[1280px]:max-[1700px]:text-[50px] text-[60px] lg:leading-[110%] tracking-[-1.2px]">
            {t("ecosystemDesc")}
          </div>
        </motion.div>
        {/* Nested stagger: the panel arrives as a block, then its chips walk in
            behind it. */}
        <motion.div
          variants={stagger(0.08, 0.2)}
          className="sm:w-120 max-lg:mx-auto max-lg:mb-8 flex-none bg-blur p-10 ml-auto"
        >
          <div className="flex flex-col gap-2">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUpItem}
                className="bg-limon py-5.25 px-3 rounded-xl flex items-end gap-4"
              >
                {stat.value ? (
                  <div className="text-[46px] leading-[0.4] font-mono">
                    {stat.value}
                  </div>
                ) : null}
                <div className={`uppercase font-mono ${stat.leading}`}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div variants={fadeUpItem}>
            <Link
              to={routerPaths.partners}
              className="sm:mt-12.5 mt-6 py-6 px-9 min-[1280px]:max-[1700px]:h-30 h-45 max-sm:h-auto flex items-center justify-center bg-white font-mono text-[20px] text-center text-black!"
            >
              {t("allPartners")} →
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Trust;
