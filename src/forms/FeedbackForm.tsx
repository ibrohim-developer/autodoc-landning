import { useTranslation } from "react-i18next";

const FeedbackForm = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-blur md:p-10 p-4 min-[1300px]:w-343.75">
      <div className="grid md:grid-cols-3 md:gap-10 gap-6">
        <div>
          <div className="label">
            {t("name")} <span className="text-red-700">*</span>
          </div>
          <input className="field" placeholder={t("yourName")} type="text" />
        </div>
        <div>
          <div className="label">
            {t("email")} <span className="text-red-700">*</span>
          </div>
          <input
            className="field"
            placeholder="default@hotmail.com"
            type="text"
          />
        </div>
        <div>
          <div className="label">
            {t("phone")} <span className="text-red-700">*</span>
          </div>
          <input className="field" placeholder="+" type="text" />
        </div>
        <div className="md:col-span-3">
          <div className="label">
            {t("subjectAppeal")} <span className="text-red-700">*</span>
          </div>
          <input
            className="field"
            placeholder={t("subjectPlaceholder")}
            type="text"
          />
        </div>
        <div className="md:col-span-3">
          <div className="label">
            {t("message")} <span className="text-red-700">*</span>
          </div>
          <textarea
            className="field"
            placeholder={t("messagePlaceholder")}
            rows={7}
          />
        </div>
      </div>
      <div className="md:mt-10 mt-6">
        <div className="flex max-md:flex-col items-center gap-x-10 gap-y-6">
          <label
            htmlFor="checkbox"
            className="flex items-center gap-x-10 gap-y-6 font-mono underline tracking-[-0.48px] md:text-[20px] leading-[90%]"
          >
            <input
              type="checkbox"
              id="checkbox"
              className="w-14 h-14 border-2"
            />
            {t("personalDataConsent")}
          </label>
          <div className="ml-auto py-3.25 px-2.5 bg-white text-[#E83333] md:text-[20px] md:leading-[90%] leading-none tracking-[-0.48px]">
            {t("requiredFieldsNotice")}
          </div>
        </div>
        <div className="md:mt-10 mt-6 md:h-25 flex items-center justify-center text-black bg-white font-mono text-center p-6.25 md:text-[20px] leading-[90%] tracking-[-0.48px]">
          {t("send")} →
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
