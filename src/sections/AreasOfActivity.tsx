import Images from "@/assets/images";
import { AreaCard } from "@/components";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

const AreasOfActivity = () => {
  const { t } = useTranslation();
  const filters = [
    { key: "technology", label: t("InformationTechnology") },
    { key: "paymentSystems", label: t("PaymentSystems") },
    // { key: "energy", label: t("Energy") },
    // { key: "industry", label: t("Industry") },
    { key: "finance", label: t("Finance") },
    // { key: "insurance", label: t("Insurance") },
    // { key: "investment", label: t("InvestmentAndConsulting") },
    { key: "transport", label: t("Transport") },
    // { key: "logistics", label: t("Logistics") },
    { key: "infra", label: t("Infrastructure") },
    { key: "arti", label: t("ArtificialIntelligenceAndDataAnalytics") },
    {
      key: "electron",
      label: t("ElectronicDocumentManagementAndGovernmentDigitalServices"),
    },
  ];
  const projects = [
    {
      id: 1,
      title: t("transportRegistrationSystem"),
      desc: t("transportRegistrationSystemDesc"),
      category: "technology",
      task: t("transportRegistrationSystemTask"),
      solution: t("transportRegistrationSystemSolution", {
        returnObjects: true,
      }),
      result: t("transportRegistrationSystemResult"),
      photo: Images.RegisterTransport,
    },
    {
      id: 4,
      title: t("justRiseGroup"),
      desc: t("justRiseGroupDesc"),
      category: "technology",
      photo: Images.JustRiseGroup,
    },
    {
      id: 4,
      title: t("safeRoadYHXX"),
      desc: t("safeRoadYHXXDesc"),
      category: "technology",
      task: t("safeRoadTask"),
      solution: t("safeRoadSolution"),
      result: t("safeRoadResult"),
      photo: Images.SafeRoad,
    },
    {
      id: 4,
      title: t("maxsusAloqa"),
      desc: t("maxsusAloqaDesc"),
      category: "technology",
      photo: Images.MaxsusAloqa,
    },
    {
      id: 4,
      title: t("infinityPay"),
      desc: t("infinityPayDesc"),
      category: "paymentSystems",
      photo: Images.InfinityPayProject,
    },
    {
      id: 4,
      title: t("expressPay"),
      desc: t("expressPayDesc"),
      category: "paymentSystems",
      photo: Images.ExpressPayProject,
    },
    {
      id: 4,
      title: t("worldPay"),
      desc: t("worldPayDesc"),
      category: "paymentSystems",
      photo: Images.WorldPayProject,
    },
    {
      id: 4,
      title: t("fincore"),
      desc: t("fincoreDesc"),
      category: "paymentSystems",
      photo: Images.Fincore,
    },
    // {
    //   id: 4,
    //   title: t("uet"),
    //   desc: t("uetDesc"),
    //   category: "energy",
    //   photo: Images.UET,
    // },
    // {
    //   id: 4,
    //   title: t("maxsusElectrTarmoqQurilish"),
    //   desc: t("maxsusElectrTarmoqQurilishDesc"),
    //   category: "energy",
    //   photo: Images.MaxsusElectrTarmoqQurilish,
    // },
    // {
    //   id: 4,
    //   title: t("ozbekEnergoTamir"),
    //   desc: t("ozbekEnergoTamirDesc"),
    //   category: "energy",
    //   photo: Images.OzbekEnergoTamir,
    // },
    // {
    //   id: 4,
    //   title: t("uzEnergoEngineering"),
    //   desc: t("uzEnergoEngineeringDesc"),
    //   category: "energy",
    //   photo: Images.UzEnergoEngineering,
    // },
    // {
    //   id: 4,
    //   title: t("smartIntegrityMe"),
    //   desc: t("smartIntegrityMeDesc"),
    //   category: "energy",
    //   photo: Images.SmartIntegrityMe,
    // },
    // {
    //   id: 4,
    //   title: t("ozEnergoSozlash"),
    //   desc: t("ozEnergoSozlashDesc"),
    //   category: "energy",
    //   photo: Images.OzEnergoSozlash,
    // },
    // {
    //   id: 4,
    //   title: t("chirchiq"),
    //   desc: t("chirchiqDesc"),
    //   category: "industry",
    //   photo: Images.ChirchiqMetallKonstruksiyalariZavodi,
    // },
    // {
    //   id: 4,
    //   title: t("technoCableGroup"),
    //   desc: t("technoCableGroupDesc"),
    //   category: "industry",
    //   photo: Images.TechnoCableGroup,
    // },
    {
      id: 4,
      title: t("fozumur"),
      desc: t("fozumurDesc"),
      category: "finance",
      photo: Images.Fozumur,
    },
    // {
    //   id: 4,
    //   title: t("finix"),
    //   desc: t("finixDesc"),
    //   category: "insurance",
    //   photo: Images.Finix,
    // },
    // ===============================
    {
      id: 1,
      title: t("transportRegistrationSystem"),
      desc: t("transportRegistrationSystemDesc"),
      category: "electron",
      task: t("transportRegistrationSystemTask"),
      solution: t("transportRegistrationSystemSolution", {
        returnObjects: true,
      }),
      result: t("transportRegistrationSystemResult"),
      photo: Images.RegisterTransport,
    },
    {
      id: 2,
      title: t("systemEDO"),
      desc: t("systemEDODesc"),
      category: "electron",
      task: t("systemEDOTask"),
      solution: t("systemEDOSolution"),
      result: t("systemEDOResult"),
      photo: Images.DataAnalytics,
    },
    {
      id: 3,
      title: t("registerIDCards"),
      desc: t("registerIDCardsDesc"),
      category: "electron",
      task: t("registerIDCardsTask"),
      solution: t("registerIDCardsSolution"),
      result: t("registerIDCardsResult"),
      photo: Images.ID,
    },
    // {
    //   id: 6,
    //   title: t("analyticsSystem"),
    //   desc: t("analyticsSystemDesc"),
    //   category: "technology",
    //   task: t("analyticsSystemTask"),
    //   solution: t("analyticsSystemSolution"),
    //   result: t("analyticsSystemResult"),
    //   photo: Images.DataAnalytics,
    // },
    // {
    //   id: 8,
    //   title: t("serviceSystem"),
    //   desc: t("serviceSystemDesc"),
    //   category: "technology",
    //   task: t("serviceSystemTask"),
    //   solution: t("serviceSystemSolution"),
    //   result: t("serviceSystemResult"),
    //   photo: Images.Queue,
    // },
    {
      id: 9,
      title: t("digitalServiceSystem"),
      desc: t("digitalServiceSystemDesc"),
      category: "electron",
      task: t("digitalServiceSystemTask"),
      solution: t("digitalServiceSystemSolution"),
      result: t("digitalServiceSystemResult"),
      photo: Images.Kassa,
    },
    // {
    //   id: 10,
    //   title: t("uetInvest"),
    //   desc: t("uetInvestDesc"),
    //   category: "investment",
    //   photo: Images.UETInvest,
    // },
    // {
    //   id: 10,
    //   title: t("uetConsulting"),
    //   desc: t("uetConsultingDesc"),
    //   category: "investment",
    //   photo: Images.UETConsulting,
    // },
    {
      id: 10,
      title: t("davrSmart"),
      desc: t("davrSmartDesc"),
      category: "transport",
      photo: Images.DavrSmartProject,
    },
    {
      id: 10,
      title: t("avtoTexnikKorik"),
      desc: t("avtoTexnikKorikDesc"),
      category: "transport",
      photo: Images.AvtoTexnikKorik,
    },
    {
      id: 10,
      title: t("vehicleService"),
      desc: t("vehicleServiceDesc"),
      category: "transport",
      photo: Images.VehicleService,
    },
    {
      id: 10,
      title: t("orientIt"),
      desc: t("orientItDesc"),
      category: "transport",
      photo: Images.OrientIt,
    },
    // {
    //   id: 10,
    //   title: t("centrumLogistics"),
    //   desc: t("centrumLogisticsDesc"),
    //   category: "logistics",
    //   photo: Images.CentrumLogistics,
    // },
    // {
    //   id: 10,
    //   title: t("centrumAir"),
    //   desc: t("centrumAirDesc"),
    //   category: "logistics",
    //   photo: Images.CentrumAir,
    // },
    {
      id: 7,
      title: t("cashRegisterSystem"),
      desc: t("cashRegisterSystemDesc"),
      category: "infra",
      task: t("cashRegisterSystemTask"),
      solution: t("cashRegisterSystemSolution"),
      result: t("cashRegisterSystemResult"),
      photo: Images.ElectronCash,
    },
    {
      id: 10,
      title: t("sayyor"),
      desc: t("sayyorDesc"),
      category: "infra",
      photo: Images.Sayyor,
    },
    {
      id: 10,
      title: t("ecoSticker"),
      desc: t("ecoStickerDesc"),
      category: "infra",
      photo: Images.EcologicTransport,
    },
    {
      id: 5,
      title: t("recognitionSystem"),
      desc: t("recognitionSystemDesc"),
      category: "arti",
      task: t("recognitionSystemTask"),
      solution: t("recognitionSystemSolution"),
      result: t("recognitionSystemResult"),
      photo: Images.AutoInfo,
    },
    {
      id: 5,
      title: t("malumotlarniQaytaIshlash"),
      desc: t("malumotlarniQaytaIshlashDesc"),
      category: "arti",
      photo: Images.MalumotlarniQaytaIshlash,
    },
  ];
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeFilter, setActiveFilter] = useState(filters[0].key);

  // Tanlangan filterga mos projectlar
  const filteredProjects = projects.filter(
    (project) => project.category === activeFilter,
  );

  const activeFilterLabel = filters.find(
    (filter) => filter.key === activeFilter,
  )?.label;

  const [titleFirstWord, ...titleRestWords] =
    t("directionsOfActivity").split(" ");

  useEffect(() => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [activeFilter]);
  return (
    <section
      ref={sectionRef}
      className="relative bg-cover bg-center bg-no-repeat xl:pb-42.5 max-xl:py-10 max-sm:px-4"
      style={{ backgroundImage: `url('${Images.area}')` }}
    >
      <div className="bg-black60 absolute top-0 left-0 w-full h-full"></div>
      <div className="relative z-1">
        <div className="title">{titleFirstWord}</div>
        <div className="title text-right">{titleRestWords.join(" ")}</div>
        <div className="flex gap-12.5 mt-8">
          <div className="max-xl:hidden sticky top-5 flex flex-col gap-y-6.5 h-max w-120 flex-none backdrop-blur-[23px] bg-white10 px-12.5 py-13.5">
            {filters.map((item, idx) => {
              const isActive = activeFilter === item.key;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveFilter(item.key)}
                  className={`${isActive && "text-[22px]"} hover:text-[#98b431] cursor-pointer transition-all
                    duration-300 font-mono uppercase leading-[130%] flex items-center justify-between gap-x-6`}
                >
                  {item.label}
                  <img src={Images.vectorRight} alt="" />
                </div>
              );
            })}
          </div>
          <div>
            <div className="font-mono xl:hidden mb-4 mt-8 text-[20px] uppercase">
              {activeFilterLabel}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -25,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="grid grid-cols-3 max-[1700px]:grid-cols-2 max-sm:grid-cols-1 gap-5.5"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={`${project.category}-${project.id}-${index}`}
                    initial={{
                      opacity: 0,
                      y: 30,
                      scale: 0.97,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <AreaCard
                      card={project}
                      number={index + 1}
                      showTitle={project.category === "paymentSystems"}
                      key={index}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreasOfActivity;
