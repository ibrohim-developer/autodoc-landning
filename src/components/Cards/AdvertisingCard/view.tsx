interface Props {
  card: {
    img?: string;
    title?: string;
    desc?: string;
  };
}

const AdvertisingCard = ({ card }: Props) => {
  return (
    <div className="xl:p-10 p-4 h-full bg-blur">
      <img
        src={card.img}
        className="rounded-3xl max-xl:w-20 max-xl:h-20 w-27 h-27 object-cover min-[1300px]:max-[1700px]:mb-8 mb-30 max-xl:mb-4"
        alt=""
      />
      <div className="max-md:mb-4 max-xl:min-h-20 max-md:min-h-auto min-h-50 min-[1300px]:max-[1700px]:min-h-40 xl:text-[40px] text-[24px] text-black leading-[90%] tracking-[-1.2px]">
        {card.title}
      </div>
      <div className="font-mono text-black leading-[200%]">{card.desc}</div>
    </div>
  );
};

export default AdvertisingCard;
