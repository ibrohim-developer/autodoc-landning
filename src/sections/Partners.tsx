import Images from "@/assets/images";

const Partners = () => {
  const statePartners = [
    Images.IIV,
    Images.AdliyaVazirligi,
    Images.Gai,
    Images.Ovir,
    Images.TemirYol,
    Images.MinTrans,
  ];
  return (
    <section className="bg-white20">
      <div className="grid grid-cols-3 gap-px">
        {statePartners.map((item, index) => (
          <div
            key={index}
            className="partner-card relative bg-black21 lg:py-13.5 sm:py-4 p-2"
          >
            <img
              src={item}
              alt={`Partner ${index + 1}`}
              className="object-contain text-center max-sm:h-30 sm:max-xl:h-40 min-[1280px]:max-[1700px]:h-70 h-87.5 mx-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
