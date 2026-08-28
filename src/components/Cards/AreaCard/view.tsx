interface Props {
  number: number;
  showTitle?: boolean;
  card: {
    title?: string;
    desc?: string;
    photo?: string;
  };
}

const AreaCard = ({ card, number, showTitle = false }: Props) => {
  return (
    <div>
      <div className="flex flex-col items-start sm:p-10 p-3 bg-blur">
        <div className="w-max bg-white10 sm:p-2.5 max-sm:px-2 max-sm:py-1 rounded-xl leading-[0.9] font-mono">
          .{number > 9 ? null : "0"}
          {number}
        </div>
      </div>
      <div
        className="xl:min-h-75 sm:min-h-50 min-h-35 flex flex-col items-start justify-end bg-no-repeat! bg-cover! bg-center! sm:p-10 p-3 relative"
        style={{
          background: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url('${card.photo}')`,
        }}
      >
        {showTitle ? (
          <div
            title={card.title}
            className="w-full truncate xl:text-[28px] sm:text-[24px] text-[16px] xl:mb-4 mb-2 leading-[110%] uppercase tracking-[-0.48px] font-mono"
          >
            {card.title}
          </div>
        ) : null}
        <div className="leading-[150%] uppercase tracking-[-0.48px] max-sm:text-[12px] font-mono">
          {card.desc}
        </div>
      </div>
    </div>
  );
};

export default AreaCard;
