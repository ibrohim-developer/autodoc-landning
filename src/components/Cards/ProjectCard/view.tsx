import { routerPaths } from "@/app/routerPaths";
import type { News } from "@/mock/news/data";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
  showYear?: boolean;
  card?: News;
}

const ProjectCard = ({ card, className, showYear = false }: Props) => {
  const language = useTranslation().i18n.language as "uz" | "ru";

  return (
    <Link
      to={routerPaths.media + `/${card?.id}`}
      className={`relative ${className}`}
    >
      {showYear ? (
        <div className="absolute top-0 right-3 z-1 translate-y-[-50%] opacity-50 font-bebas md:text-[133px] text-[70px] leading-[100%] md:tracking-[-10px] tracking-[-5px]">
          {card?.year ? card?.year : "2026"}
        </div>
      ) : null}
      <div className="sm:p-10 p-4 bg-white12 backdrop-blur-[28px]">
        <div className="sm:mb-8 mb-4 w-max bg-white10 max-sm:text-[11px] py-2.5 px-3 rounded-xl leading-[0.9] uppercase font-mono">
          {card?.date}
        </div>
        <div className="lg:min-h-24 line-clamp-3 font-semibold sm:text-[32px] text-[20px] leading-none tracking-[-1.2px] mb-4">
          {card?.title[language]}
        </div>
        <div className="line-clamp-3 min-[1280px]:max-[1700px]:text-[18px] sm:text-[21px] leading-[140%]!">
          {card?.description[language]}
        </div>
      </div>
      <img
        className="w-full object-cover min-[1280px]:max-[1700px]:h-40 h-63.5 max-sm:h-40"
        src={card?.image}
        alt=""
      />
    </Link>
  );
};

export default ProjectCard;
