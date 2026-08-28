import { Images } from "@/assets/images";
import { useTranslation } from "react-i18next";

const Believe = () => {
  const { t } = useTranslation();
  return (
    <section className="xl:p-52.5 sm:p-20 min-[1280px]:max-[1700px]:py-25 max-sm:px-4 max-sm:py-12">
      <div className="min-[1400px]:w-275 m-auto xl:text-[50px] sm:text-[32px] text-[20px] leading-none italic flex items-center sm:gap-x-18.5 gap-x-4">
        <img src={Images.containerLeft} className="max-sm:scale-[0.4]" alt="" />
        {t("weBelieve")}
        <img src={Images.containerRight} className="max-sm:scale-[0.4]" alt="" />
      </div>
    </section>
  );
};

export default Believe;
