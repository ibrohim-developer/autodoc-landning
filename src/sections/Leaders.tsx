import { Images } from "@/assets/images";
import { useTranslation } from "react-i18next";

/* Bottom scrim keeps the names legible over four photos shot in very different
   lighting; the top one anchors the index number, which is otherwise invisible
   against the pale studio backdrops. Same inline-gradient approach as AreaCard. */
const SCRIM = [
  "linear-gradient(0deg, #000000 0%, rgba(0,0,0,0.88) 20%, rgba(0,0,0,0.4) 46%, rgba(0,0,0,0) 72%)",
  "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 18%)",
].join(", ");

const Leaders = () => {
  const { t } = useTranslation();

  const leadership = [
    {
      name: "Fahriddinov Sardor",
      position: t("chairmanHolding"),
      photo: Images.management1,
    },
    {
      name: "Inogamov Sherzod",
      position: t("directorStrategy"),
      photo: Images.management2,
    },
    {
      name: "Umarov Murod",
      position: t("investmentDirector"),
      photo: Images.management3,
    },
    {
      name: "Karimov Shamsiddin",
      position: t("directorInformationTechnology"),
      photo: Images.management4,
    },
    // {
    //   name: "Qobulov Zafar",
    //   position: t("chiefFinancialOfficer"),
    //   photo: Images.management5,
    // },
  ];

  return (
    <section className="grid xl:grid-cols-4 grid-cols-2">
      {leadership.map((leader, idx) => (
        <article
          key={leader.name}
          className="leader-card group relative max-sm:h-88 max-xl:h-140 xl:max-[1700px]:h-120 h-167 border-b-[1.3px] border-t-[1.3px] border-white20 not-last:border-r-[1.3px]"
        >
          {/* Inner wrapper clips the zoom without clipping the
                white corner squares .leader-card paints outside the box. */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={leader.photo}
              alt={leader.name}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0" style={{ background: SCRIM }} />

            <span className="absolute top-0 left-0 font-mono text-white/75 text-[15px] max-sm:text-[11px] leading-none min-[1280px]:max-[1700px]:px-4 px-6 max-sm:px-3 py-5 max-sm:py-3">
              {(idx + 1).toString().padStart(2, "0")}
            </span>

            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center text-center min-[1280px]:max-[1700px]:px-4 px-6 max-sm:px-3 min-[1280px]:max-[1700px]:pb-8 pb-12 max-sm:pb-5">
              <h3 className="min-[1280px]:max-[1700px]:text-[32px] text-[42px] max-sm:text-[20px] leading-[0.95]">
                {leader.name}
              </h3>
              {/* Two lines are reserved whether or not the title wraps, so the
                    four names share a baseline across the row. */}
              <p className="min-[1280px]:max-[1700px]:text-[20px] text-[26px] max-sm:text-[14px] leading-[1.15] min-h-[2.3em] text-d5 mt-2">
                {leader.position}
              </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Leaders;
