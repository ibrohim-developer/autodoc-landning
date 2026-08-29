import { useEffect, useState } from "react";
import { getCityTime, getGMT, getTimeByOffset } from "@/helper/utils";
import { useTranslation } from "react-i18next";
import useDropdown from "./useDropdown";

interface Props {
  className?: string;
}

const Time = ({ className }: Props) => {
  const { t } = useTranslation();
  const { open, ref, toggle } = useDropdown<HTMLDivElement>();
  const cities = [
    {
      name: t("timezoneLondonDublinLisbon"),
      offset: 0,
    },
    {
      name: t("timezoneBerlinParisRomeMadrid"),
      offset: 1,
    },
    {
      name: t("timezoneCairoKyivHelsinkiJohannesburg"),
      offset: 2,
    },
    {
      name: t("timezoneMoscowIstanbulRiyadh"),
      offset: 3,
    },
    {
      name: t("timezoneDubaiBakuTbilisi"),
      offset: 4,
    },
    {
      name: t("timezoneTashkentIslamabadYekaterinburg"),
      offset: 5,
    },
    {
      name: t("timezoneAstanaAlmatyDhaka"),
      offset: 6,
    },
    {
      name: t("timezoneBangkokJakartaNovosibirsk"),
      offset: 7,
    },
    {
      name: t("timezoneBeijingSingaporePerth"),
      offset: 8,
    },
    {
      name: t("timezoneTokyoSeoulYakutsk"),
      offset: 9,
    },
    {
      name: t("timezoneSydneyVladivostok"),
      offset: 10,
    },
    {
      name: t("timezoneMagadanNewCaledonia"),
      offset: 11,
    },
    {
      name: t("timezoneFijiAucklandKamchatka"),
      offset: 12,
    },
  ];

  const uzbekistanTimezone = "Asia/Tashkent";

  const [uzbekistanTime, setUzbekistanTime] = useState(
    getCityTime(uzbekistanTimezone),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setUzbekistanTime(getCityTime(uzbekistanTimezone));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      onClick={toggle}
      aria-expanded={open}
      className={`nav-bg dropdown time-dropdown rounded-xl py-[var(--nav-pad-y)] px-[var(--nav-pad-x)] flex items-center gap-[var(--nav-gap)] ${className} ${
        open ? "is-open" : ""
      }`}
    >
      {/* The pill shows the clock alone; the country and GMT offset stay in the
          panel below, where the other zones give them context. */}
      <div className="text-[length:var(--nav-clock)] leading-[0.8]">
        {uzbekistanTime}
      </div>

      <div className="dropdown-container" onClick={(e) => e.stopPropagation()}>
        {/* Uzbekistan */}
        <div className="flex items-center gap-3 bg-black30 rounded-xl py-4 px-5">
          <div className="text-[20px] w-52 leading-[0.8]">
            {t("uzbekistan")} ({getGMT(uzbekistanTimezone)})
          </div>

          <div className="h-6.75 w-px bg-[#D9D9D9]"></div>

          <div className="text-[32px] leading-[0.8]">{uzbekistanTime}</div>
        </div>

        {/* Cities */}
        <div className="time-list">
          {cities.map((city, idx) => (
            <div
              key={idx.toString()}
              className="flex items-center gap-3 mt-4.5"
            >
              <div className="text-[14px] w-57 leading-[130%] font-mono">
                {city.name}
              </div>

              <div className="h-6.75 w-px bg-[#D9D9D9]"></div>

              <div className="text-[32px] text-right leading-[0.8]">
                {getTimeByOffset(city.offset)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Time;
