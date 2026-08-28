import Images from "@/assets/images";
import { fadeUpItem, REVEAL_VIEWPORT, stagger } from "@/helper/motion";
import { motion } from "motion/react";

const Partners = () => {
  const statePartners = [
    Images.IIV,
    Images.AdliyaVazirligi,
    Images.Gai,
    Images.Ovir,
    Images.TemirYol,
    Images.MinTrans,
  ];
  return (
    <section className="bg-white20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={REVEAL_VIEWPORT}
        variants={stagger(0.07)}
        className="grid grid-cols-3 gap-px"
      >
        {statePartners.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUpItem}
            className="partner-card relative bg-black21 lg:py-13.5 sm:py-4 p-2"
          >
            <img
              src={item}
              alt={`Partner ${index + 1}`}
              className="object-contain text-center max-sm:h-30 sm:max-xl:h-40 min-[1280px]:max-[1700px]:h-70 h-87.5 mx-auto"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Partners;
