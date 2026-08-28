import Images from "@/assets/images";

const PartnersOrganization = () => {
  const commercialPartners = [
    Images.ExpressPay,
    Images.WorldPay,
    Images.OrientIT,
    Images.Paynet,
    Images.AloqaBank,
    Images.SmartBank,
    Images.UniversalBank,
    Images.MyBank,
    Images.IpakYoliBank,
    Images.UzTelecom,
    Images.CyberPark,
    Images.ASBT,
  ];
  return (
    <section className="bg-d5">
      <div className="grid lg:grid-cols-4 grid-cols-3 gap-0.5">
        {commercialPartners.map((item, index) => (
          <div
            key={index}
            className="partner-organization-card relative bg-white max-lg:py-6 lg:max-[1700px]:py-6 py-13.5 px-4 backdrop-blur-xs"
          >
            <img
              src={item}
              alt={`Partner ${index + 1}`}
              className="text-center h-27.5 min-[1280px]:max-[1700px]:h-20 mx-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersOrganization;
