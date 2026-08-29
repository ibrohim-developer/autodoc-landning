import Images from "@/assets/images";
import {
  AreasOfActivity,
  News,
  Partners,
  PartnersOrganization,
  Trust,
  Video,
} from "@/sections";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePos({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  };
  return (
    <>
      <header
        className="sm:h-svh sm:min-h-150 relative overflow-hidden bg-[#0a0a0a]"
        onMouseMove={handleMouseMove}
      >
        {/* Background Image + Parallax S*/}
        <motion.div
          className="absolute inset-0"
          animate={{
            x: mousePos.x * -20,
            y: mousePos.y * -20,
            scale: 1.08,
          }}
          transition={{
            type: "tween",
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          <div
            className="w-full h-full bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url('${Images.ofis}')`,
            }}
          />
        </motion.div>

        {/* Dark overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={heroLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-black60"
        />

        {/* Cinematic gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/70" />

        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Mobile: wordmark + copy stack in one bottom-anchored column.
            sm:contents dissolves this wrapper on desktop, so the two children
            keep positioning against <header> exactly as before. */}
        <div className="sm:contents relative z-20 flex flex-col gap-4 p-4 pt-[min(38svh,16rem)]">
          {/* AUTODOC title */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={
              heroLoaded
                ? {
                    opacity: 1,
                    y: 0,
                  }
                : {}
            }
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="header-title text-white absolute font-bebas z-10"
          >
            AUTODOC
          </motion.h1>

          {/* Right Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={
              heroLoaded
                ? {
                    opacity: 1,
                    x: 0,
                  }
                : {}
            }
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="sm:w-[min(30rem,45vw)] flex flex-col items-start sm:absolute sm:bottom-0 sm:right-0 max-sm:rounded-xl bg-blur sm:p-[clamp(1.25rem,2.1vw,2.5rem)] p-3 z-20"
          >
            {/* Badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={
                heroLoaded
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.7,
                delay: 0.8,
              }}
              className="bg-white10 rounded-xl sm:py-2.5 px-3 py-1 uppercase font-mono"
            >
              {t("aboutHolding")}
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={
                heroLoaded
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {}
              }
              transition={{ 
                duration: 0.8,
                delay: 1,
              }}
              className="text-[length:clamp(1rem,1.79vw_+_0.36rem,2.5rem)] mt-[clamp(1rem,1.7vw,2rem)] mb-[clamp(1.5rem,4vw,4.75rem)] tracking-[-0.3px] leading-[0.9]"
            >
              {t("createDigitalFuture")} {t("createDigitalFutureDesc")}{" "}
              {t("withoutBureaucracy")}.
            </motion.div>

            {/* Tags */}
            <div className="flex flex-col items-start gap-2">
              {[
                t("digitalizationOfPublicServices"),
                t("intelligentSystemsAndAnalytics"),
                t("digitalInfrastructure"),
              ].map((item, index) => (
                /* Entrance and hover are split across two elements on
                   purpose. Leaving a hover animates back to the elements own
                   animate state, so any delay reachable from that state - on
                   the transition prop OR inside the target - is spent again on
                   the way out. The staggered entrance therefore has to live on
                   a wrapper the hover never touches. */
                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -25,
                  }}
                  animate={heroLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 1.15 + index * 0.12,
                    ease: "easeOut",
                  }}
                >
                  {/* Rest state is bare - no delay is reachable from it - so
                      the prop below times the return honestly. Engage stays
                      quick; only the settle back is drawn out. */}
                  <motion.div
                    whileHover={{
                      x: 6,
                      transition: { duration: 0.18, ease: "easeOut" },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                    }}
                    className="uppercase rounded-xl tracking-[-0.48px] max-sm:text-[13px] sm:leading-[0.8] py-[clamp(0.75rem,1.1vw,1.3125rem)] px-3 font-mono bg-limon cursor-default"
                  >
                    {item}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={
            heroLoaded
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 1,
            delay: 1.8,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 max-sm:hidden flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-linear-to-b from-transparent via-white/60 to-transparent animate-pulse" />
        </motion.div>
      </header>
      {/* <header
        className="h-screen relative bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url('${Images.ofis}')` }}
        onMouseMove={handleMouseMove}
      >
        <div className="bg-black60 absolute top-0 left-0 w-full h-full"></div>
        <h1 className="header-title text-[406px] leading-[102%] text-white absolute -bottom-20 left-0 tracking-[-24px] font-bebas">
          AUTODOC
        </h1>
        <div className="sm:w-120 flex flex-col items-start absolute sm:bottom-0 sm:right-0 bottom-4 right-4 max-sm:left-4 max-sm:rounded-xl bg-blur sm:p-10 p-3">
          <div className="bg-white10 rounded-xl sm:py-2.5 px-3 py-1 uppercase font-mono">
            О холдинге
          </div>
          <div className="xl:text-[40px] lg:text-[24px] sm:mt-8 mt-4 xl:mb-19 mb-6 tracking-[-0.3px] leading-[0.9]">
            Делаем государственные и коммерческие услуги быстрыми, удобными, и
            прозрачными с помощью цифровых решений.
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="uppercase rounded-xl tracking-[-0.48px] max-sm:text-[13px] sm:leading-[0.8] xl:py-5.25 py-3 px-3 font-mono bg-limon">
              Цифровизация государственных услуг
            </div>
            <div className="uppercase rounded-xl tracking-[-0.48px] max-sm:text-[13px] sm:leading-[0.8] xl:py-5.25 py-3 px-3 font-mono bg-limon">
              Интеллектуальные системы и аналитика
            </div>
            <div className="uppercase rounded-xl tracking-[-0.48px] max-sm:text-[13px] sm:leading-[0.8] xl:py-5.25 py-3 px-3 font-mono bg-limon">
              Цифровая инфраструктура
            </div>
          </div>
        </div>
      </header> */}
      <Video />
      <News />
      <Trust />
      <Partners />
      <PartnersOrganization />
      <AreasOfActivity />
    </>
  );
};

export default Home;
