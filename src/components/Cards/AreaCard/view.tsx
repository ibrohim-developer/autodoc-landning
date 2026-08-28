interface Props {
  number: number;
  card: {
    title?: string;
    desc?: string;
    photo?: string;
  };
}

const AreaCard = ({ card, number }: Props) => {
  return (
    <div>
      {/* <div className="flex flex-col items-start sm:p-10 p-3 bg-blur xl:min-h-72.5 max-sm:min-h-35"> */}
      <div className="flex flex-col items-start sm:p-10 p-3 bg-blur">
        <div className="sm:mb-8 mb-4 w-max bg-white10 sm:p-2.5 max-sm:px-2 max-sm:py-1 rounded-xl leading-[0.9] font-mono">
          .{number > 9 ? null : "0"}
          {number}
        </div>
        {/* <div className="xl:text-[40px] sm:text-[32px] text-[20px] max-sm:mb-4 leading-[0.9] tracking-[-1.2px]">
          {card.title}
        </div> */}
      </div>
      <div
        className="xl:min-h-75 sm:min-h-50 min-h-35 flex flex-col items-start justify-end bg-no-repeat! bg-cover! bg-center! sm:p-10 p-3 relative"
        style={{
          background: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%), url('${card.photo}')`,
        }}
      >
        <div className="leading-[150%] uppercase tracking-[-0.48px] max-sm:text-[12px] font-mono">
          {card.desc}
        </div>
      </div>
    </div>
  );
};

export default AreaCard;
