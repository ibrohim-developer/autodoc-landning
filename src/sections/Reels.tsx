import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Images from "@/assets/images";
import { Navigation } from "swiper/modules";
import { InstagramReelsCard } from "@/components";
import { useTranslation } from "react-i18next";

const Reels = () => {
  const { t } = useTranslation();
  const list = [
    {
      url: "https://www.instagram.com/reel/DcN8WlvBnWC/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    },
    {
      url: "https://www.instagram.com/reel/DcN8nX9BUoa/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    },
    {
      url: "https://www.instagram.com/reel/DcQjxXmhHnh/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    },
    {
      url: "https://www.instagram.com/reel/DcQ8QJ4hAaC/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    },
    {
      url: "https://www.instagram.com/reel/Dca1QEWB71X/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    },
    {
      url: "https://www.instagram.com/reel/Dcduvh0BIle/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA==",
    },
  ];
  return (
    <div className="md:px-2 sm:px-8">
      <div className="relative min-[1700px]:w-[1800px] xl:max-2xl:w-full lg:max-xl:w-[80%] md:max-lg:w-[80%] mx-auto">
        <Swiper
          breakpoints={{
            868: {
              slidesPerView: 3,
            },
            540: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={10}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={{
            prevEl: ".reels-prev",
            nextEl: ".reels-next",
          }}
          modules={[Navigation]}
          className="min-[1700px]:w-360 xl:max-2xl:w-250 lg:max-xl:w-200 flex-none"
        >
          {list.map((item, idx) => (
            <SwiperSlide key={idx.toString()}>
              <InstagramReelsCard
                url={item.url}
                width={"100%"}
                className="2xl:h-172.5 xl:h-126 lg:h-106 md:h-113 h-132"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="reels-arrows">
          <div className="reels-arrow reels-prev">
            <img src={Images.reelsArrow} alt="" />
          </div>
          <div className="reels-arrow reels-next">
            <img src={Images.reelsArrow} className="-rotate-180" alt="" />
          </div>
        </div>
      </div>
      <a
        href="https://www.instagram.com/autodoc_holding/?utm_source=ig_embed&ig_rid=ABWV4N70kILtqJkIHzXtVuX"
        target="_blank"
        className="min-[1700px]:w-323.75 md:text-[20px] leading-[90%] tracking-[-0.48px] font-mono mx-auto text-black! bg-white md:h-26.5 text-center flex items-center justify-center gap-8 px-6 max-md:py-4 mt-7.5"
      >
        {t("viewOnInstagram")} <img src={Images.reelsIcon} alt="" />
      </a>
    </div>
  );
};

export default Reels;
