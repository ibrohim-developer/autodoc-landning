import Images from "@/assets/images";
import { fadeUp, REVEAL_VIEWPORT, stagger } from "@/helper/motion";
import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  className?: string;
};

/* Light section on a dark-only site, same as the paper block above it: the
   copy is black and the frosted panel is a white scrim, not the .bg-blur
   white-5% used everywhere else (that one is tuned for photos on black and
   disappears against this background).

   Every size below is the Figma frame measured at 1920 and expressed as vw so
   it scales as one piece — 110px type in an 1690px panel only reads as one
   line because those two hold their ratio. Breakpoint steps would let the type
   outgrow the panel between stops and wrap mid-phrase. Upper bound = the
   designer's value, lower bound = the smallest that still reads on a phone. */
const IdeaToResult = ({ className = "" }: Props) => {
  const { t } = useTranslation();

  return (
    <section
      className={`relative isolate overflow-hidden bg-white py-[clamp(3rem,17.55vw,21.0625rem)] ${className}`}
      style={
        { "--metal-wave-src": `url('${Images.careerWave}')` } as CSSProperties
      }
    >
      <div className="metal-wave metal-wave--a" />
      <div className="metal-wave metal-wave--b" />

      {/* The mark tints the metal rather than covering it: multiply lets the
          wave's bands read straight through, so as the two wave layers drift
          the metal appears to flow inside the shape. An opaque <img> here
          would read as a sticker on a moving background.

          It never moves — a rippling company mark reads as a rendering fault.

          The export is cropped tight to the mark, so it carries no position of
          its own. Right-anchored and vertically centred at the frame's own
          proportions; ESTIMATED until the layer X/Y come back from Figma. */}
      <img
        src={Images.careerLogo}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="absolute top-1/2 right-[3%] h-[89%] w-auto max-w-[58vw] object-contain -translate-y-1/2 mix-blend-multiply select-none pointer-events-none"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={REVEAL_VIEWPORT}
        variants={stagger(0.12)}
        className="relative z-1"
      >
        <motion.div
          variants={fadeUp}
          className="w-[88%] max-w-[1690px] mx-auto px-[clamp(1rem,1.8vw,2.5rem)] py-[clamp(2.5rem,10.47vw,12.5625rem)] bg-white/35 backdrop-blur-2xl"
        >
          {/* 0.8px of tracking at the designer's 110px, carried as em so it
              thins out with the type instead of clogging the small end. */}
          <p className="text-center text-gray56 font-normal text-[clamp(1.75rem,5.73vw,6.875rem)] leading-[1.5] tracking-[0.0073em]">
            {t("careerIdeaToResult")}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default IdeaToResult;
