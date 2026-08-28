import Images from "@/assets/images";
import { FeedbackForm } from "@/forms";
import { useTranslation } from "react-i18next";

const Feedback = () => {
  const { t } = useTranslation();
  return (
    <section
      style={{ backgroundImage: `url(${Images.feedbackBg})` }}
      className="relative bg-cover bg-center bg-no-repeat"
    >
      <div className="bg-black60 absolute top-0 left-0 w-full h-full"></div>
      <div className="relative z-1">
        <div className="flex flex-col items-center justify-center md:py-20 py-12">
          <div className="title mb-6">{t("feedback")}</div>
          <div className="md:text-[60px] text-[20px] leading-[110%] tracking-[-1.2px] text-center md:mb-22.5 mb-10">
            {t("contactYouShortly")}
          </div>
          <FeedbackForm />
        </div>
      </div>
    </section>
  );
};

export default Feedback;
