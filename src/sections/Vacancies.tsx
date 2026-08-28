import Images from "@/assets/images";
import { VacancyCard } from "@/components";
import { useTranslation } from "react-i18next";

const Vacancies = () => {
  const { t } = useTranslation();
  return (
    <section
      className="max-md:p-4 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${Images.area})` }}
    >
      <div className="bg-black60 absolute top-0 left-0 w-full h-full"></div>
      <div className="relative z-1">
        <div className="title pt-4">{t("vacancies")}</div>
        <div className="grid grid-cols-4 min-[1300px]:max-[1700px]:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 mt-15">
          {[...Array(8)].map((_, idx) => (
            <VacancyCard key={idx.toString()} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vacancies;
