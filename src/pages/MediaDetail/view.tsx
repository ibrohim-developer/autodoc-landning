import Images from "@/assets/images";
import { ProjectCard } from "@/components";
import {
  fadeUp,
  fadeUpCard,
  fadeUpHero,
  fadeUpItem,
  overlayFade,
  REVEAL_VIEWPORT,
  stagger,
} from "@/helper/motion";
import { getYoutubeEmbedUrl } from "@/helper/utils";
import { newsMock } from "@/mock/news/data";
import { Video } from "@/sections";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

const MediaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const language = i18n.language as "uz" | "ru";
  const detail = newsMock.find((news) => news.id === Number(id));
  const filteredNews = newsMock.filter((news) => news.id !== Number(id));

  return (
    <>
      {/* The mount ladder covers what is above the fold — scrim, back link,
          date, headline. Everything further down declares its own `initial`
          and becomes an independent whileInView root. */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={stagger(0.12, 0.1)}
        style={{ backgroundImage: `url('${Images.mediaBg}')` }}
        className="relative bg-cover bg-center bg-no-repeat md:pb-35 pb-4"
      >
        <motion.div
          variants={overlayFade}
          className="bg-black60 absolute top-0 left-0 w-full h-full"
        />
        <div className="relative md:pt-50 pt-30 z-1">
          <motion.div
            variants={fadeUpItem}
            className="flex items-center gap-6 max-md:p-4 xl:mb-25"
            onClick={() => navigate(-1)}
          >
            <div className="bg-white md:w-26.5 w-15 md:h-26.5 h-15 flex items-center justify-center">
              <img src={Images.reelsArrow} className="black-img" alt="" />
            </div>
            <div className="md:text-[100px] text-[26px] font-mono">{t("mediaHub")}</div>
          </motion.div>
          <div className="flex max-xl:flex-col justify-between">
            <div className="md:p-20 p-4">
              <motion.div
                variants={fadeUpHero}
                className="md:mb-12.5 mb-4 2xl:text-[133px] md:text-[100px] text-[32px] leading-none md:tracking-[-5px] font-bebas opacity-50"
              >
                {detail?.date}
              </motion.div>
              <motion.div
                variants={fadeUpHero}
                className="2xl:text-[60px] md:text-[42px] text-[24px] leading-[150%] md:tracking-[-1.2px] font-semibold"
              >
                {detail?.title[language]}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={REVEAL_VIEWPORT}
                variants={stagger(0.1)}
                className="flex flex-wrap gap-x-8 gap-y-4 md:my-12.5 my-6"
              >
                {detail?.images.map((item, idx) => (
                  <motion.img
                    key={idx.toString()}
                    variants={fadeUpCard}
                    src={item}
                    className="2xl:max-h-62.5"
                    alt=""
                  />
                ))}
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={REVEAL_VIEWPORT}
                variants={fadeUp}
                className="font-medium md:text-[34px] text-[24px] tracking-[-1.2px]"
              >
                {detail?.description[language]}
              </motion.div>
              {detail?.youtubeVideo ? (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={REVEAL_VIEWPORT}
                  variants={fadeUp}
                  className="w-full aspect-video mt-12"
                >
                  <iframe
                    src={getYoutubeEmbedUrl(detail?.youtubeVideo)}
                    title="AUTODOC Holding"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>
              ) : null}
              {/* <div className="bg-blur p-10 my-12.5 text-[32px] font-semibold leading-[110%] tracking-[-1.2px]">
                {detail?.description[language]}
              </div> */}
              {/* <div className="font-medium text-[34px] tracking-[-1.2px]">
                В новой концепции автомобиль становится полноценным цифровым
                объектом: у него появляется собственная история, документы,
                платежи, сервисное обслуживание и набор доступных услуг. <br />{" "}
                В перспективе AutoDoc планирует превратить эту систему в единый
                цифровой слой между человеком, автомобилем, государственными
                сервисами, страховыми компаниями и бизнесом. Следующим этапом
                развития станет переход от модели «пользователь ищет услугу» к
                модели «сервис сам предлагает решение в нужный момент». <br />{" "}
                AutoDoc рассматривает это как один из шагов к будущему, в
                котором большинство рутинных процессов, связанных с автомобилем,
                будет происходить автоматически.
              </div> */}
            </div>
            {/* The reveal stays off the sticky element itself — motion writes an
                inline transform, and a transform on the stuck box fights the
                offset the browser applies while it is pinned. The badge and the
                cards inside it animate instead. */}
            <div className="xl:w-120 max-xl:px-4 max-xl:mx-auto max-xl:grid md:max-xl:grid-cols-2 xl:sticky top-7.5 h-max flex-none flex flex-col items-start">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={REVEAL_VIEWPORT}
                variants={fadeUpItem}
                className="bg-white10 max-md:mt-6 w-max md:max-xl:col-span-2 py-2.5 px-3 rounded-xl uppercase leading-[75%] tracking-[-0.48px] mb-5.5"
              >
                {t("readAlso")}
              </motion.div>
              {filteredNews.map((card, idx) => (
                <motion.div
                  key={idx.toString()}
                  initial="hidden"
                  whileInView="visible"
                  viewport={REVEAL_VIEWPORT}
                  variants={fadeUpCard}
                >
                  <ProjectCard card={card} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      <Video />
    </>
  );
};

export default MediaDetail;
