import Images from "@/assets/images";
import { ProjectCard } from "@/components";
import { getYoutubeEmbedUrl } from "@/helper/utils";
import { newsMock } from "@/mock/news/data";
import { Video } from "@/sections";
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
      <section
        style={{ backgroundImage: `url('${Images.mediaBg}')` }}
        className="relative bg-cover bg-center bg-no-repeat md:pb-35 pb-4"
      >
        <div className="bg-black60 absolute top-0 left-0 w-full h-full"></div>
        <div className="relative md:pt-50 pt-30 z-1">
          <div
            className="flex items-center gap-6 max-md:p-4 xl:mb-25"
            onClick={() => navigate(-1)}
          >
            <div className="bg-white md:w-26.5 w-15 md:h-26.5 h-15 flex items-center justify-center">
              <img src={Images.reelsArrow} className="black-img" alt="" />
            </div>
            <div className="md:text-[100px] text-[26px] font-mono">{t("mediaHub")}</div>
          </div>
          <div className="flex max-xl:flex-col justify-between">
            <div className="md:p-20 p-4">
              <div className="md:mb-12.5 mb-4 2xl:text-[133px] md:text-[100px] text-[32px] leading-none md:tracking-[-5px] font-bebas opacity-50">
                {detail?.date}
              </div>
              <div className="2xl:text-[60px] md:text-[42px] text-[24px] leading-[150%] md:tracking-[-1.2px] font-semibold">
                {detail?.title[language]}
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-4 md:my-12.5 my-6">
                {detail?.images.map((item, idx) => (
                  <img
                    key={idx.toString()}
                    src={item}
                    className="2xl:max-h-62.5"
                    alt=""
                  />
                ))}
              </div>
              <div className="font-medium md:text-[34px] text-[24px] max-md:text-justify tracking-[-1.2px]">
                {detail?.description[language]}
              </div>
              {detail?.youtubeVideo ? (
                <div className="w-full aspect-video mt-12">
                  <iframe
                    src={getYoutubeEmbedUrl(detail?.youtubeVideo)}
                    title="AUTODOC Holding"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
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
            <div className="xl:w-120 max-xl:px-4 max-xl:mx-auto max-xl:grid md:max-xl:grid-cols-2 xl:sticky top-7.5 h-max flex-none flex flex-col items-start">
              <div className="bg-white10 max-md:mt-6 w-max md:max-xl:col-span-2 py-2.5 px-3 rounded-xl uppercase leading-[75%] tracking-[-0.48px] mb-5.5">
                {t("readAlso")}
              </div>
              {filteredNews.map((card, idx) => (
                <ProjectCard card={card} key={idx.toString()} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Video />
    </>
  );
};

export default MediaDetail;
