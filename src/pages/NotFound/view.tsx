import Images from "@/assets/images";
import { Navbar } from "@/components";
import Copyright from "@/components/Footer/Copyright";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <section
      style={{ backgroundImage: `url('${Images.ofis}')` }}
      className="bg-cover bg-center bg-no-repeat h-screen relative flex items-center justify-center"
    >
      <Navbar />
      <div className="bg-black60 absolute top-0 left-0 w-full h-full"></div>
      <div className="relative z-1">
        <div className="text-[400px] leading-[70%] font-bebas">404</div>
        <div className="text-[60px] leading-[110%] tracking-[-1.2px]">
          {t("pageNotFound")}
        </div>
      </div>
      <div className="absolute bottom-10 right-5 flex items-center justify-between gap-8 bg-blur p-10">
        <div className="leading-[150%] tracking-[-0.48px] font-mono uppercase">
          {t("cookieNotice")}
        </div>
        <div className="bg-white py-6 px-9 font-mono text-black text-[20px] leading-[80%] tracking-[-0.48px] text-center">
          {t("ok")}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-1">
        <Copyright />
      </div>
    </section>
  );
};

export default NotFound;
