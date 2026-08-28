interface Props {
  className?: string;
  card?: {
    year: string;
    title: string;
    desc: string;
    detail: string;
    photo: string;
  };
}

const ProjectCard = ({ card, className }: Props) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute top-0 right-3 z-1 translate-y-[-50%] opacity-50 font-bebas md:text-[133px] text-[70px] leading-[100%] md:tracking-[-10px] tracking-[-5px]">
        {card?.year}
      </div>
      <div className="sm:p-10 p-4 bg-white12 backdrop-blur-[28px]">
        <div className="sm:mb-8 mb-4 w-max bg-white10 max-sm:text-[11px] py-2.5 px-3 rounded-xl leading-[0.9] uppercase font-mono">
          {card?.title}
        </div>
        {/* <div className="lg:min-h-24 font-semibold sm:text-[32px] text-[20px] leading-none tracking-[-1.2px] mb-4">
          {card?.desc}
        </div> */}
        <div className="line-clamp-3 lg:min-h-22.25 min-[1280px]:max-[1700px]:text-[18px] sm:text-[21px] leading-[140%]!">
          {card?.detail}
        </div>
      </div>
      <img
        className="w-full object-cover min-[1280px]:max-[1700px]:h-40 h-63.5 max-sm:h-40"
        src={card?.photo}
        alt=""
      />
    </div>
  );
};

export default ProjectCard;
