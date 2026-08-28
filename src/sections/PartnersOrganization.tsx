import Images from "@/assets/images";
import { fadeUpItem, REVEAL_VIEWPORT, stagger } from "@/helper/motion";
import { motion } from "motion/react";

const PartnersOrganization = () => {
  const commercialPartners = [
    Images.ExpressPay,
    Images.WorldPay,
    Images.OrientIT,
    Images.Paynet,
    Images.AloqaBank,
    Images.SmartBank,
    Images.UniversalBank,
    Images.MyBank,
    Images.IpakYoliBank,
    Images.UzTelecom,
    Images.CyberPark,
    Images.ASBT,
  ];
  return (
    <section className="bg-d5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={REVEAL_VIEWPORT}
        variants={stagger(0.05)}
        className="grid lg:grid-cols-4 grid-cols-3 gap-0.5"
      >
        {commercialPartners.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUpItem}
            className="partner-organization-card relative bg-white max-lg:py-6 lg:max-[1700px]:py-6 py-13.5 px-4 backdrop-blur-xs"
          >
            <img
              src={item}
              alt={`Partner ${index + 1}`}
              className="text-center h-27.5 min-[1280px]:max-[1700px]:h-20 mx-auto"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PartnersOrganization;
